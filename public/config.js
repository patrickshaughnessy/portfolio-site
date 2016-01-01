System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "npm:react@0.14.3",
      "lib/components/Home.js",
      "npm:react-dom@0.14.3",
      "lib/components/Portfolio.js",
      "lib/components/Blog.js",
      "npm:react-router@2.0.0-rc4",
      "lib/components/AppController.js",
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "lib/actions/PostActions.js",
      "npm:marked@0.3.5",
      "lib/stores/PostStore.js",
      "npm:react@0.14.3/react",
      "npm:babel-runtime@5.8.34/helpers/get",
      "npm:babel-runtime@5.8.34/helpers/inherits",
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "npm:react-dom@0.14.3/index",
      "lib/components/ViewController.js",
      "lib/components/NavBar.js",
      "npm:react-router@2.0.0-rc4/lib/index",
      "npm:marked@0.3.5/lib/marked",
      "lib/Constants.js",
      "lib/API.js",
      "lib/AppDispatcher.js",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:react@0.14.3/lib/React",
      "npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.34/core-js/object/define-property",
      "npm:react@0.14.3/lib/ReactDOM",
      "npm:react-router@2.0.0-rc4/lib/Link",
      "npm:react-router@2.0.0-rc4/lib/Router",
      "npm:react-router@2.0.0-rc4/lib/IndexLink",
      "npm:react-router@2.0.0-rc4/lib/IndexRedirect",
      "npm:react-router@2.0.0-rc4/lib/PropTypes",
      "npm:react-router@2.0.0-rc4/lib/Redirect",
      "npm:react-router@2.0.0-rc4/lib/IndexRoute",
      "npm:react-router@2.0.0-rc4/lib/Route",
      "npm:react-router@2.0.0-rc4/lib/History",
      "npm:react-router@2.0.0-rc4/lib/Lifecycle",
      "npm:react-router@2.0.0-rc4/lib/useRoutes",
      "npm:react-router@2.0.0-rc4/lib/RouteContext",
      "npm:react-router@2.0.0-rc4/lib/RouteUtils",
      "npm:react-router@2.0.0-rc4/lib/RouterContext",
      "npm:react-router@2.0.0-rc4/lib/match",
      "npm:react-router@2.0.0-rc4/lib/browserHistory",
      "npm:react-router@2.0.0-rc4/lib/hashHistory",
      "npm:react-router@2.0.0-rc4/lib/useRouterHistory",
      "npm:react@0.14.3/lib/Object.assign",
      "lib/actions/ServerActions.js",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:flux@2.1.1",
      "npm:react@0.14.3/lib/ReactDOMServer",
      "npm:react@0.14.3/lib/deprecated",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:react@0.14.3/lib/ReactIsomorphic",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactVersion",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "github:components/jquery@2.1.4",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:react@0.14.3/lib/ReactDefaultInjection",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactDOMTextComponent",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:react@0.14.3/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:react-router@2.0.0-rc4/lib/warning",
      "npm:invariant@2.2.0",
      "npm:history@1.17.0/lib/createHashHistory",
      "npm:history@1.17.0/lib/useQueries",
      "npm:react-router@2.0.0-rc4/lib/createTransitionManager",
      "npm:react-router@2.0.0-rc4/lib/RouterUtils",
      "npm:react-router@2.0.0-rc4/lib/PatternUtils",
      "npm:react-router@2.0.0-rc4/lib/getRouteParams",
      "npm:react-router@2.0.0-rc4/lib/deprecateObjectProperties",
      "npm:react-router@2.0.0-rc4/lib/createMemoryHistory",
      "npm:history@1.17.0/lib/createBrowserHistory",
      "npm:history@1.17.0/lib/useBasename",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:events@1.0.2",
      "npm:flux@2.1.1/index",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:react@0.14.3/lib/ReactServerRendering",
      "npm:react@0.14.3/lib/ReactChildren",
      "npm:react@0.14.3/lib/ReactClass",
      "npm:react@0.14.3/lib/ReactComponent",
      "npm:react@0.14.3/lib/ReactDOMFactories",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactElementValidator",
      "npm:react@0.14.3/lib/ReactPropTypes",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:react@0.14.3/lib/ClientReactRootIndex",
      "npm:react@0.14.3/lib/ServerReactRootIndex",
      "npm:react@0.14.3/lib/ReactRootIndex",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:react@0.14.3/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:react@0.14.3/lib/onlyChild",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:react@0.14.3/lib/ChangeEventPlugin",
      "npm:react@0.14.3/lib/BeforeInputEventPlugin",
      "npm:react@0.14.3/lib/DefaultEventPluginOrder",
      "npm:react@0.14.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.3/lib/ReactDOMComponent",
      "npm:react@0.14.3/lib/ReactEventListener",
      "npm:react@0.14.3/lib/ReactInjection",
      "npm:react@0.14.3/lib/ReactReconcileTransaction",
      "npm:react@0.14.3/lib/SelectEventPlugin",
      "npm:react@0.14.3/lib/SimpleEventPlugin",
      "npm:react@0.14.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactDefaultPerf",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/DOMChildrenOperations",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.3/lib/ReactMarkupChecksum",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react@0.14.3/lib/ReactRef",
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Transaction",
      "github:components/jquery@2.1.4/jquery",
      "npm:history@1.17.0/lib/Actions",
      "npm:history@1.17.0/lib/ExecutionEnvironment",
      "npm:history@1.17.0/lib/DOMUtils",
      "npm:history@1.17.0/lib/deprecate",
      "npm:invariant@2.2.0/browser",
      "npm:history@1.17.0/lib/DOMStateStorage",
      "npm:history@1.17.0/lib/runTransitionHook",
      "npm:warning@2.1.0",
      "npm:query-string@3.0.0",
      "npm:history@1.17.0/lib/createDOMHistory",
      "npm:history@1.17.0/lib/parsePath",
      "npm:react-router@2.0.0-rc4/lib/computeChangedRoutes",
      "npm:react-router@2.0.0-rc4/lib/TransitionUtils",
      "npm:react-router@2.0.0-rc4/lib/getComponents",
      "npm:react-router@2.0.0-rc4/lib/isActive",
      "npm:react-router@2.0.0-rc4/lib/matchRoutes",
      "npm:history@1.17.0/lib/extractPath",
      "npm:history@1.17.0/lib/createMemoryHistory",
      "npm:events@1.0.2/events",
      "npm:react@0.14.3/lib/ReactServerBatchingStrategy",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:fbjs@0.3.2/lib/mapObject",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:flux@2.1.1/lib/Dispatcher",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:react@0.14.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.3/lib/traverseAllChildren",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactNoopUpdateQueue",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:react@0.14.3/lib/getIteratorFn",
      "npm:react@0.14.3/lib/getEventTarget",
      "npm:react@0.14.3/lib/isTextInputElement",
      "npm:react@0.14.3/lib/ReactDOMButton",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:react@0.14.3/lib/getEventCharCode",
      "npm:react@0.14.3/lib/ViewportMetrics",
      "npm:react@0.14.3/lib/adler32",
      "npm:process@0.11.2",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:react@0.14.3/lib/EventConstants",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:react@0.14.3/lib/isEventSupported",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/SyntheticCompositionEvent",
      "npm:react@0.14.3/lib/FallbackCompositionState",
      "npm:react@0.14.3/lib/SyntheticInputEvent",
      "npm:react@0.14.3/lib/SyntheticMouseEvent",
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/AutoFocusUtils",
      "npm:react@0.14.3/lib/CSSPropertyOperations",
      "npm:react@0.14.3/lib/ReactDOMInput",
      "npm:react@0.14.3/lib/ReactDOMOption",
      "npm:react@0.14.3/lib/ReactDOMSelect",
      "npm:react@0.14.3/lib/ReactDOMTextarea",
      "npm:react@0.14.3/lib/ReactMultiChild",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactEmptyComponent",
      "npm:react@0.14.3/lib/ReactNativeComponent",
      "npm:react@0.14.3/lib/ReactInputSelection",
      "npm:react@0.14.3/lib/SyntheticClipboardEvent",
      "npm:react@0.14.3/lib/SyntheticFocusEvent",
      "npm:react@0.14.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.3/lib/SyntheticDragEvent",
      "npm:react@0.14.3/lib/SyntheticTouchEvent",
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/SyntheticWheelEvent",
      "npm:react@0.14.3/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.3.2/lib/performanceNow",
      "npm:react@0.14.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.3/lib/Danger",
      "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.3/lib/ReactEventEmitterMixin",
      "npm:react@0.14.3/lib/EventPluginRegistry",
      "npm:fbjs@0.3.2/lib/isTextNode",
      "npm:react@0.14.3/lib/ReactOwner",
      "npm:react@0.14.3/lib/ReactCompositeComponent",
      "npm:warning@2.1.0/browser",
      "npm:query-string@3.0.0/index",
      "npm:react-router@2.0.0-rc4/lib/AsyncUtils",
      "npm:history@1.17.0/lib/createHistory",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:fbjs@0.1.0-alpha.7/lib/invariant",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:process@0.11.2/browser",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:react@0.14.3/lib/getEventModifierState",
      "npm:react@0.14.3/lib/forEachAccumulated",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:react@0.14.3/lib/CSSProperty",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:fbjs@0.3.2/lib/isNode",
      "npm:react@0.14.3/lib/ReactErrorUtils",
      "npm:react@0.14.3/lib/EventPluginUtils",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:react@0.14.3/lib/accumulateInto",
      "npm:react@0.14.3/lib/getTextContentAccessor",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:react@0.14.3/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:react@0.14.3/lib/ReactChildReconciler",
      "npm:react@0.14.3/lib/flattenChildren",
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:react@0.14.3/lib/ReactDOMSelection",
      "npm:react@0.14.3/lib/getEventKey",
      "npm:fbjs@0.3.2/lib/performance",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:strict-uri-encode@1.0.2",
      "npm:history@1.17.0/lib/AsyncUtils",
      "npm:deep-equal@1.0.1",
      "npm:history@1.17.0/lib/createLocation",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:fbjs@0.3.2/lib/camelize",
      "npm:fbjs@0.3.2/lib/hyphenate",
      "npm:react@0.14.3/lib/getNodeForCharacterOffset",
      "npm:strict-uri-encode@1.0.2/index",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:deep-equal@1.0.1/index",
      "npm:fbjs@0.3.2/lib/toArray",
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:deep-equal@1.0.1/lib/is_arguments"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "flux": "npm:flux@2.1.1",
    "foundation-sites": "npm:foundation-sites@6.1.1",
    "jquery": "github:components/jquery@2.1.4",
    "marked": "npm:marked@0.3.5",
    "react": "npm:react@0.14.3",
    "react-dom": "npm:react-dom@0.14.3",
    "react-router": "npm:react-router@2.0.0-rc4",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbemitter@2.0.0": {
      "fbjs": "npm:fbjs@0.1.0-alpha.7",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.1.0-alpha.7": {
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:flux@2.1.1": {
      "fbemitter": "npm:fbemitter@2.0.0",
      "fbjs": "npm:fbjs@0.1.0-alpha.7",
      "immutable": "npm:immutable@3.7.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:foundation-sites@6.1.1": {
      "jquery": "npm:jquery@2.1.4",
      "what-input": "npm:what-input@1.1.4"
    },
    "npm:history@1.17.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:query-string@3.0.0": {
      "strict-uri-encode": "npm:strict-uri-encode@1.0.2"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-router@2.0.0-rc4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@1.17.0",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.3": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
