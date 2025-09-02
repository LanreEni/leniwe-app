// src/hooks/useUserProfile.ts
"use client";
import { useEffect, useState } from "react";
import { useAuth } from "./useauth";
import { getUserProfile } from "@/lib/firebase/profile";
import type { UserProfile } from "@/types/user";

export function useUserProfile() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      if (user?.uid) {
        const p = await getUserProfile(user.uid);
        if (mounted) setProfile(p);
      } else {
        setProfile(null);
      }
      if (mounted) setLoading(false);
    }
    if (!authLoading) load();
    return () => {
      mounted = false;
    };
  }, [user, authLoading]);

  return { profile, loading, user };
}
