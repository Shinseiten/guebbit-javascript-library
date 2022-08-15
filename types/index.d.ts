import hasOwnNestedProperty from "@checkers/hasownnestedproperty";
import isEmail from "@checkers/isemail";
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
import levenshteinDistance from "@math/levenshteindistance";
import divideArray from "@array/dividearray";
import chunksArray from "@array/chunksarray";
import getArrayDepth from "@array/getarraydepth";
import debouncePromise from "@promises/debouncepromise";
import intersectionHelper from "@dom/helpers/intersection";
import lazyloadHelper from "@dom/helpers/lazyload";
import arrayColumns from "@filters/arraycolumns";
import associativeSlice from "@filters/associativeslice";
import whitelist from "@filters/whitelist";
import match from "@filters/match";
import filter, { filterAnd, filterOr, filterNand, filterNor } from "@filters/filter";
import searchRecords, { searchAnd, searchOr, searchNand, searchNor } from "@filters/searchrecords";
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
import type { logicGatesType, filterRulesMap, calculationsMap } from "@/interfaces";
declare const scripts: {
    activator: () => [false | IntersectionObserver, false | IntersectionObserver];
    lazyload: () => false | IntersectionObserver;
    createPrototypes: {};
};
export { getUUID, getLast, getOverlapRange, arrayColumns, associativeSlice, whitelist, match, filter, filterAnd, filterOr, filterNand, filterNor, searchRecords, searchAnd, searchOr, searchNand, searchNor, hasOwnNestedProperty, isEmail, isEmpty, isJson, isUrl, rangeOverlaps, getDelta, getMapDistance, matrixTranspose, levenshteinDistance, divideArray, chunksArray, getArrayDepth, debouncePromise, hexToRGB, secondsToTime, timeToSeconds, toFormData, getForm, getValue, getIFrame, getIndex, getSiblings, toDOM, appendChildren, addEvent, removeEvent, classScroll, stickyJs, shyJs, mouseParallax, calculateMouseParallax, executeMouseParallax, createMouseParallaxItem, intersectionHelper, lazyloadHelper, scripts, };
export type { logicGatesType, filterRulesMap, calculationsMap };
declare const _default: {
    getUUID: () => string;
    getLast: (myArray: unknown[]) => unknown;
    getOverlapRange: (firstStart: number, firstEnd: number, secondStart: number, secondEnd: number) => [number, number];
    arrayColumns: (haystack: Record<string, unknown>[], columns: string[]) => unknown[][];
    associativeSlice: (obj: Record<string, unknown>, start: number, endd: number) => Record<string, unknown>;
    whitelist: (objToFilter: Record<string, unknown>, allowed: string[]) => Record<string, unknown>;
    match: (check?: string, match?: string, sensitive?: boolean, distance?: number) => boolean;
    filter: (toCheck?: unknown, toMatch?: unknown, logic?: logicGatesType, sensitive?: boolean, distance?: number) => boolean;
    filterAnd: typeof filterAnd;
    filterOr: typeof filterOr;
    filterNand: typeof filterNand;
    filterNor: typeof filterNor;
    searchRecords: (haystack: Record<string, unknown>[], rules?: filterRulesMap[], logic?: logicGatesType) => Record<string, unknown>[];
    searchAnd: typeof searchAnd;
    searchOr: typeof searchOr;
    searchNand: typeof searchNand;
    searchNor: typeof searchNor;
    hasOwnNestedProperty: (obj: Record<string, unknown>, propertyPath: string) => boolean;
    isEmail: (string: string) => boolean;
    isEmpty: (test: unknown) => boolean;
    isJson: (test: string) => false | Record<string, unknown>;
    isUrl: (string: string) => boolean;
    rangeOverlaps: (firstStart: number, firstEnd: number, secondStart: number, secondEnd: number, sameUnitOverlap?: boolean) => number;
    getDelta: (a: number, b: number, size?: number) => number;
    getMapDistance: (Xa: number, Xb: number, Ya: number, Yb: number, size?: number) => number;
    matrixTranspose: (m: unknown[][]) => unknown[][];
    levenshteinDistance: (a: string | null | undefined, b: string | null | undefined) => number;
    divideArray: (array: unknown[], n?: number) => unknown[];
    chunksArray: (array: unknown[], n: number) => unknown[];
    getArrayDepth: typeof getArrayDepth;
    hexToRGB: (hex: string) => [number, number, number];
    secondsToTime: (time?: number) => Record<string, number>;
    timeToSeconds: (date?: string, delimiter?: string) => number;
    toFormData: (obj: Record<string, unknown>, form?: FormData | null, namespace?: string | null) => FormData;
    getForm: (form: HTMLElement | null, selectors?: string) => Record<string, unknown>;
    getValue: (element: HTMLElement | null, attribute?: string) => string | number | boolean | null;
    getIFrame: (iframe: HTMLElement | HTMLIFrameElement | null) => HTMLElement | HTMLBodyElement | null;
    getIndex: (element: HTMLElement | null) => number;
    getSiblings: (element: HTMLElement | Element | null) => Element[];
    toDOM: (html: string) => NodeListOf<ChildNode>;
    appendChildren: (element: HTMLElement, ...children: HTMLElement[] | Element[]) => HTMLElement;
    addEvent: (parent: Node, eventName: string, childSelector: string | Node, callback: (...args: unknown[]) => void) => void;
    classScroll: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, data: import("@dom/events/classscroll").classscrollSettingsMap[], $window?: Window) => void;
    stickyJs: (element: HTMLElement | null, className?: string, $window?: Window) => void;
    intersectionHelper: (element: HTMLElement | HTMLElement[] | NodeList | HTMLCollection | null, settings?: import("@dom/helpers/intersection").intersectionSettingsMap, $window?: Window) => false | IntersectionObserver;
    lazyloadHelper: typeof lazyloadHelper;
    scripts: {
        activator: () => [false | IntersectionObserver, false | IntersectionObserver];
        lazyload: () => false | IntersectionObserver;
        createPrototypes: {};
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map