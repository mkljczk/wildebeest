export type InstanceConfig = {
	title?: string
	email?: string
	description?: string
}

export async function configure(data: InstanceConfig) {
	const res = await fetch('/start-instance', {
		method: 'POST',
		body: JSON.stringify(data),
	})
	if (!res.ok) {
		throw new Error('/start-instance returned: ' + res.status)
	}
}

export async function testInstance(): Promise<boolean> {
	const res = await fetch('/api/v1/instance')
	const data = await res.json<{ title?: string }>()
	return !!data.title
}
