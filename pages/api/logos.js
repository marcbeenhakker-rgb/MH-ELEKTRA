import fs from "fs";
import path from "path";

// Returns an array of logo paths found in /public/logos
export default function handler(req, res) {
  try {
    const logosDir = path.join(process.cwd(), "public", "logos");
    if (!fs.existsSync(logosDir)) {
      return res.status(200).json({ logos: [] });
    }

    const allowed = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
    const files = fs
      .readdirSync(logosDir)
      .filter((f) => allowed.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "nl"));

    const logos = files.map((file) => ({
      src: `/logos/${file}`,
      name: file.replace(/\.[^.]+$/, ""),
    }));

    // Cache a bit (safe: content only changes when you redeploy or update files)
    res.setHeader("Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
    return res.status(200).json({ logos });
  } catch (e) {
    return res.status(200).json({ logos: [] });
  }
}
