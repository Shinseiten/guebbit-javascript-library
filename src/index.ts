import hasOwnNestedProperty from "@checkers/hasownnestedproperty";
import isEmail from "@checkers/isemail"
import isEmpty from "@checkers/isempty";
import isJson from "@checkers/isjson";
import isUrl from "@checkers/isurl";
import rangeOverlaps from "@checkers/rangeoverlaps";

import getUUID from "@getters/getuuid";
import getLast from "@getters/getlast";
import getOverlapRange from "@getters/getoverlaprange";
import getForm from "@dom/getters/getform";
import getValue from "@dom/getters/getvalue";
import getIFrame from "@dom/getters/getiframe";
import getIndex from "@dom/getters/getindex";
import getSiblings from "@dom/getters/getsiblings";

import getDelta from "@math/getdelta";
import getMapDistance from "@math/getmapdistance";
import matrixTranspose from "@math/matrixtranspose";

import arrayColumn from "@array/arraycolumn";
import divideArray from "@array/dividearray";
import chunksArray from "@array/chunksarray";

import debouncePromise from "@promises/debouncepromise";

import intersectionHelper from "@dom/helpers/intersection";
import lazyloadHelper from "@dom/helpers/lazyload";

import whitelist from "@filters/whitelist";
import levenshteinDistance from "@filters/levenshteindistance";
import match from "@filters/match";
import search from "@filters/search";
import associativeSlice from "@filters/associativeslice";

import hexToRGB from "@converters/hextorgb";
import secondsToTime from "@converters/secondstotime";
import timeToSeconds from "@converters/timetoseconds";
import toFormData from "@converters/toformdata";

import toDOM from "@dom/todom";
import appendChildren from "@dom/appendchildren";

import { addEvent, removeEvent } from "@dom/events/globalevents";
import classScroll from "@dom/events/classscroll";
import stickyJs from "@dom/events/stickyjs";
import shyJs from "@dom/events/shyjs";

import mouseParallax, { calculateMouseParallax, executeMouseParallax, createMouseParallaxItem } from "@dom/manipulation/mouseparallax";

import activator from "@scripts/activator";
import lazyload from "@scripts/lazyload";
import createPrototypes from "@scripts/createPrototypes";

import type { calculationsMap } from "@/interfaces";

const scripts = {
	activator,
	lazyload,
	createPrototypes
};

export {
	//getters
	getUUID,
	getLast,
  getOverlapRange,

	//filters
	associativeSlice,
	levenshteinDistance,
	match,
	search,
	whitelist,

	//checkers
	hasOwnNestedProperty,
	isEmail,
	isEmpty,
	isJson,
	isUrl,
  rangeOverlaps,

	//math
  getDelta,
  getMapDistance,
	matrixTranspose,

	//array
	arrayColumn,
	divideArray,
	chunksArray,

  // async
  debouncePromise,

  //converters
  hexToRGB,
  secondsToTime,
  timeToSeconds,
  toFormData,

	// ------------- DOM -------------

	//getters
	getForm,
	getValue,
	getIFrame,
	getIndex,
	getSiblings,

	//manipulations
	toDOM,
	appendChildren,

	//events
	addEvent,
  removeEvent,
	classScroll,
	stickyJs,
  shyJs,

  //manipulation
  mouseParallax,
  calculateMouseParallax,
  executeMouseParallax,
  createMouseParallaxItem,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,

  // ------------- INTERFACES -------------

  calculationsMap
};



export default {
	//getters
	getUUID,
	getLast,
  getOverlapRange,

	//filters
	associativeSlice,
	levenshteinDistance,
	match,
	search,
	whitelist,

	//checkers
	hasOwnNestedProperty,
	isEmail,
	isEmpty,
	isJson,
	isUrl,
  rangeOverlaps,

	//math
  getDelta,
  getMapDistance,
  matrixTranspose,

	//array
	arrayColumn,
	divideArray,
	chunksArray,

  //converters
  hexToRGB,
  secondsToTime,
  timeToSeconds,
  toFormData,

	// ------------- DOM -------------

	//getters
	getForm,
	getValue,
	getIFrame,
	getIndex,
	getSiblings,

	//manipulations
	toDOM,
	appendChildren,

	//events
	addEvent,
	classScroll,
	stickyJs,

	//helpers
	intersectionHelper,
	lazyloadHelper,

	scripts,

  // INTERFACES CAN'T BE IN DEFAULT EXPORT
};
