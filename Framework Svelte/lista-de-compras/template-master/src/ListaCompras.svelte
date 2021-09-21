<script>
	import ListaItem from "./ListaItem.svelte"

	//Comandos Condicionais e Repetição
	let obj = {
		x:0
	};

	let itens = [{
		comprado: false,
		descricao: "Pão de Forma"
	}, {
		comprado: false,
		descricao: "Manteiga"
	}]; //array de itens de compra


	let inputEl = null;

	let id=0;
	function adicionarItem(e){
		e.preventDefault();
		
		itens = [
			... itens,{
			comprado: false,
			descricao: inputEl.value,
		}
		];
		
		inputEl.value = "";
	}

	function removerItem(item){
		itens = itens.filter(i => i!==item);
	}


</script>

<h1>Lista de Compras</h1>
<form on:submit={adicionarItem}>
	<input bind:this={inputEl}> 
	<button type="submit">Adicionar item</button>
</form>

<!--EXIBIR O TEXTO SE A LISTA ESTIVER VAZIA-->
{#if itens.length===0}
<div>A lista está vazia.</div>
{:else}
	{#each itens as item, i}
		<ListaItem 
			bind:comprado={item.comprado} 
			descricao={item.descricao} 
			on:itemremovido={()=>{
				removerItem(item);
			}}
		/>
	{/each}
{/if}

<!--Contador de itens-->
<div>Itens Pendentes: {itens.filter(item => !item.comprado).length}</div>



<style>

</style>