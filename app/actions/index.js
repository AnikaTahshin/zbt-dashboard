'use server'
import {signIn} from '@/auth'
export async function socialLogin(formData) {
  const action = formData.get('action');
  await signIn(action, {redirectTo: '/'})
  console.log(action)
}

export async function logout(formData) {
  
}