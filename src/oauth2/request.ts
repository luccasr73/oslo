export function createURL(
	url: string | URL,
	urlSearchParams: Record<string, string | undefined>
): URL {
	const newUrl = new URL(url);
	for (const [key, value] of Object.entries(urlSearchParams)) {
		if (!value) continue;
		newUrl.searchParams.set(key, value);
	}
	return newUrl;
}

export function authorizationHeader(
	type: "bearer" | "basic",
	token: string
): string {
	if (type === "basic") {
		return ["Basic", token].join(" ");
	}
	if (type === "bearer") {
		return ["Bearer", token].join(" ");
	}
	throw new TypeError("Invalid token type");
}
