import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.hypeciaconnect.com';

    // Helper to recursively find all page.tsx files
    function getPageFiles(dir: string, fileList: string[] = []): string[] {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // Skip api directory and hidden directories
                if (file !== 'api' && !file.startsWith('.') && !file.startsWith('_')) {
                    getPageFiles(filePath, fileList);
                }
            } else {
                if (file === 'page.tsx' || file === 'page.js') {
                    fileList.push(filePath);
                }
            }
        });

        return fileList;
    }

    // Get the absolute path to the app directory
    const appDir = path.join(process.cwd(), 'src', 'app');
    let pageFiles: string[] = [];

    try {
        pageFiles = getPageFiles(appDir);
    } catch (error) {
        console.error('Error scanning for pages:', error);
    }

    const routes = pageFiles.map((filePath) => {
        // Convert file path to URL path
        const relativePath = path.relative(appDir, filePath);
        // Remove /page.tsx and normalize slashes
        let routePath = relativePath
            .replace(/\\/g, '/') // valid for windows
            .replace(/\/page\.(tsx|js)$/, '')
            .replace(/^page\.(tsx|js)$/, '');

        // Handle root path
        if (routePath === '') {
            return {
                url: `${baseUrl}`,
                lastModified: new Date(),
                changeFrequency: 'yearly' as const,
                priority: 1,
            };
        }

        return {
            url: `${baseUrl}/${routePath}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        };
    });

    return routes;
}
