type CleanupFn = () => void;

type AdapterArgs = {
	element: HTMLElement;
};

type AdapterFn<Args extends AdapterArgs> = (args: Args) => CleanupFn;

export type SvelteActionReturn<Params> = {
	update?: (params?: Params) => void;
	destroy?: () => void;
};

export type SvelteAction<Params> = (
	element: HTMLElement,
	params?: Params,
) => SvelteActionReturn<Params>;

export function createAdapterAction<Args extends AdapterArgs>(
	adapter: AdapterFn<Args>,
): SvelteAction<Omit<Args, 'element'>> {
	return (element, params) => {
		let cleanup = adapter({ element, ...(params ?? {}) } as Args);

		return {
			update(nextParams) {
				cleanup();
				cleanup = adapter({ element, ...(nextParams ?? {}) } as Args);
			},
			destroy() {
				cleanup();
			},
		};
	};
}
