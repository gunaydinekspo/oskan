'use server';

import { put } from '@vercel/blob';

export async function uploadImage(formData: FormData) {
  const file = formData.get('file') as File;

  if (!file) {
    throw new Error('Dosya gerekli');
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('Sadece görsel dosyaları yükleyebilirsiniz');
  }

  try {
    const blob = await put(file.name, file, { access: 'public' });
    return { url: blob.url };
  } catch (error) {
    throw new Error('Dosya yükleme başarısız');
  }
}
