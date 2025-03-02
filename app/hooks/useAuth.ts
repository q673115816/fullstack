import { useUserStore } from '@/app/store/useUserStore'
import { createClient } from '@/utils/supabase/client'

export default function HeaderAuth() {
    const supabase = createClient();
  const { user, setUser, clearUser } = useUserStore()
  
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    clearUser()
  }

  const handleSignIn = async () => {
    // ... 登录逻辑 ...
    const { data: { user } } = await supabase.auth.getUser() // ... 获取用户数据 ...
    setUser(user)
  }

  return { handleSignOut, handleSignIn }
} 