import { openDB } from 'idb';

async function fetchImageData(artId) {
    let src;
    src = await getImageFromDb(artId)
    console.log(src);
    if (src) {
        return URL.createObjectURL(src);
    }
    const response = await fetch(`https://corsproxy.io/?https://gwent.one/image/gwent/assets/card/art/low/${artId}.jpg`);
    const blob = await response.blob();
    await saveImageToDb(artId, blob);
    
    return URL.createObjectURL(blob);
}

export default fetchImageData;

const DB_NAME = "gwent_data";
const STORE_NAME = "images";

async function initDb() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        }
    })
}

async function getImageFromDb(id) {
    const db = await initDb();
    return db.get(STORE_NAME, id)
}

async function saveImageToDb(id, blob) {
    const db = await initDb();
    await db.put(STORE_NAME, blob, id);
}