import * as cheerio from 'cheerio';
export async function getUserProfilePicture(username: string): Promise<string | null> {
    const profileUrl = `https://vjudge.net/user/${username}`;
    try {
        const response = await fetch(profileUrl);
        const text = await response.text();
        const $ = cheerio.load(text);
        const imgElement = $('#user_avatar');
        if (imgElement.length) {
            const profilePictureUrl = imgElement.attr('src');
            return profilePictureUrl ?? null;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}
