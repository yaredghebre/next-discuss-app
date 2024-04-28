'use server';
import * as auth from '@/helpers/auth';

export async function signOut() {
    return auth.signOut();
}