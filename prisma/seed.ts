import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
	const hb = await prisma.album.upsert({
		where: { name: 'huntington beach' },
		update: {},
		create: {
			name: 'huntington beach',
		},
	})
	const pet = await prisma.album.upsert({
		where: { name: 'pet' },
		update: {},
		create: {
			name: 'pet',
		},
	})
    const hawaii = await prisma.album.upsert({
		where: { name: 'hawaii' },
		update: {},
		create: {
			name: 'hawaii',
		},
	})
    const mexico = await prisma.album.upsert({
		where: { name: 'mexico' },
		update: {},
		create: {
			name: 'mexico',
		},
	})
    const auto = await prisma.album.upsert({
		where: { name: 'auto' },
		update: {},
		create: {
			name: 'auto',
		},
	})
    const tahoe = await prisma.album.upsert({
		where: { name: 'tahoe' },
		update: {},
		create: {
			name: 'tahoe',
		},
	})
    const sf = await prisma.album.upsert({
		where: { name: 'san francisco' },
		update: {},
		create: {
			name: 'san francisco',
		},
	})
}


main()
	.then(() => prisma.$disconnect())
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})