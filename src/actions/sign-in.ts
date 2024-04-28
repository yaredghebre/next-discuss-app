'use server';
import * as auth from '@/helpers/auth';

export async function signIn() {
    return auth.signIn('github');
}
