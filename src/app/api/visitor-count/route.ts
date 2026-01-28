import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/visitors.json');

export async function GET() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            // Initialize if not exists
            fs.writeFileSync(dataFilePath, JSON.stringify({ count: 14205 }));
        }
        const fileContents = fs.readFileSync(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json({ count: data.count });
    } catch (error) {
        return NextResponse.json({ count: 14205 }, { status: 500 });
    }
}

export async function POST() {
    try {
        let count = 14205;
        if (fs.existsSync(dataFilePath)) {
            const fileContents = fs.readFileSync(dataFilePath, 'utf8');
            const data = JSON.parse(fileContents);
            count = data.count;
        }

        // Increment
        count += 1;

        // Write back
        fs.writeFileSync(dataFilePath, JSON.stringify({ count }));

        return NextResponse.json({ count });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update count' }, { status: 500 });
    }
}
