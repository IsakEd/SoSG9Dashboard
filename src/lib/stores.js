import { readable, writable, derived } from "svelte/store";
import { data } from "./data.js";
const _data = structuredClone(data);

export const dataStore = readable(_data);

export let lifePriority = writable(1);
export let initialCostPriority = writable(1);
export let rescueTimePriority = writable(1);
export let operationalCostPriority = writable(1);

export const lossesStore = writable([]);
