import type { Profile } from "../../../types/index.js";
import { userProfiles } from "../../../data/seed.js";

export async function getProfile(userId: string) {
  return userProfiles.get(userId) ?? null;
}

export async function updateProfile(userId: string, data: Partial<Profile>) {
  const profile = userProfiles.get(userId);
  if (!profile) {
    return null;
  }

  const updated: Profile = {
    ...profile,
    ...data,
    id: profile.id,
    userId: profile.userId,
    skills: data.skills ?? profile.skills,
    education: data.education ?? profile.education,
    experience: data.experience ?? profile.experience,
  };

  userProfiles.set(userId, updated);
  return updated;
}

export function getProfileCompletion(profile: Profile) {
  const fields = [
    profile.fullName,
    profile.email,
    profile.phone,
    profile.location,
    profile.headline,
    profile.summary,
    profile.skills.length > 0,
    profile.education.length > 0,
    profile.experience.length > 0,
  ];

  const filled = fields.filter(Boolean).length;
  return Math.round((filled / fields.length) * 100);
}
