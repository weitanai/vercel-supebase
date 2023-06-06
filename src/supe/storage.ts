import supabase from "."

export async function uploadFile(file: any, path: string) {
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload(path, file)
    return { data, error }
}

export async function downloadFile(path: string) {
    const { data, error } = await supabase.storage.from('avatars').download(path);
    return { data, error }
}