import ListaCompras from './ListaCompras.svelte';

const app = new ListaCompras({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;