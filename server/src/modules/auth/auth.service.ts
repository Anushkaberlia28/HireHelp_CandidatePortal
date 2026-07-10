import jwt from 'jsonwebtoken';
import { authRepository } from './auth.repository';
// import { publishCandidateRegistered } from '../events/kafka-producer';
import { RegisterInput, LoginInput } from './auth.schema';

export class AuthService {
  async register(data: RegisterInput) {
    const existing = await authRepository.findByEmail(data.email);
    if (existing) {
      throw new Error('Email already registered');
    }

    const candidate = await authRepository.create(data);
    
    // await publishCandidateRegistered({
    //   id: candidate.id,
    //   email: candidate.email,
    //   firstName: candidate.firstName,
    //   lastName: candidate.lastName,
    // });

    const token = this.generateToken(candidate);
    
    return {
      token,
      candidate: {
        id: candidate.id,
        email: candidate.email,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
      },
    };
  }

  async login(data: LoginInput) {
    const candidate = await authRepository.findByEmail(data.email);
    if (!candidate) {
      throw new Error('Invalid credentials');
    }

    const isValid = await authRepository.verifyPassword(data.password, candidate.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken(candidate);
    
    return {
      token,
      candidate: {
        id: candidate.id,
        email: candidate.email,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
      },
    };
  }

  async getProfile(id: number) {
    const candidate = await authRepository.findById(id);
    if (!candidate) {
      throw new Error('Candidate not found');
    }
    
    const { passwordHash, ...candidateData } = candidate;
    return candidateData;
  }

  private generateToken(candidate: { id: number; email: string }): string {
    const secret = process.env.JWT_SECRET || 'default_secret';
    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
    return jwt.sign(
      { id: candidate.id, email: candidate.email },
      secret,
      { expiresIn } as jwt.SignOptions
    );
  }
}

export const authService = new AuthService();
