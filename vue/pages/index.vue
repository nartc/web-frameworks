<script lang="ts">
enum Components {
	HelloWorld,
	Styling,
	NestingComponents,
	Props,
	HTML,
	BasicVariables,
	DependentVariables,
	ConditionalRendering,
	ListLooping,
}

export default {
	data() {
		return {
			currentComponent: Components.HelloWorld,
			all: Components
		};
	},
	methods: {
		handleSwitch(newComponent: Components) {
			this.currentComponent = newComponent;
			console.log(this.currentComponent);
		},
	},
	    head() {
      return {
        title: "Vue Basic Framework Concepts",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'A list of basic Vue components'
          }
        ]
      }
			}
};
</script>

<template>
	<div class="container">
		<nav class="links">
			<button @click="() => handleSwitch(0)">Hello World</button>
			<button @click="() => handleSwitch(1)">Styling</button>
			<button @click="() => handleSwitch(2)">Nesting Components</button>
			<button @click="() => handleSwitch(3)">Props</button>
			<button @click="() => handleSwitch(4)">HTML Tags</button>
			<button @click="() => handleSwitch(5)">Basic Variables</button>
			<button @click="() => handleSwitch(6)">Dependent Variables</button>
			<button @click="() => handleSwitch(7)">Conditional Rendering</button>
			<button @click="() => handleSwitch(8)">List Looping</button>
		</nav>
		<div class="components">
			<HelloWorld v-if="currentComponent === 0" />
			<Styling v-if="currentComponent === 1" />
			<NestingComponents  v-if="currentComponent === 2" />
			<Props v-if="currentComponent === 3" />
			<BasicVariables v-if="currentComponent === 5" />
			<DependentVariables v-if="currentComponent === 6" />
			<ConditionalRendering v-if="currentComponent === 7" />
			<ListLooping v-if="currentComponent === 8" />
		</div>
	</div>
</template>


<style>
	html, body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	* {
		box-sizing: border-box;
	}

	.container {
  	width: 100vw;
		display: flex;
		height: 100%;
	}

	.links { 
  margin: 16px;
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: rgba(84, 105, 215, 0.5);
		border-radius: 16px;
	}
	.links button {
		background-color: rgba(84, 105, 215, 1);
		color: white;
		margin: 8px;
		padding: 16px 8px;
		border-radius: 8px;
		list-style: none;
		cursor: pointer;
		border: none;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	}

	.links button:hover {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	}

	.components {
		width: 100%;
		margin: 16px;
		background-color: rgba(100,80,180,0.1);
		border-radius: 8px;
		padding: 8px 24px;
	}
</style>
