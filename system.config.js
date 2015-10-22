System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true,
    "module": "commonjs"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/main.js": [
      "src/main.ts",
      "npm:reflect-metadata@0.1.2",
      "npm:zone.js@0.5.8",
      "npm:angular2@2.0.0-alpha.44/angular2",
      "npm:reflect-metadata@0.1.2/Reflect",
      "npm:zone.js@0.5.8/lib/zone",
      "npm:angular2@2.0.0-alpha.44/core",
      "npm:angular2@2.0.0-alpha.44/profile",
      "npm:angular2@2.0.0-alpha.44/bootstrap",
      "npm:angular2@2.0.0-alpha.44/lifecycle_hooks",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:zone.js@0.5.8/lib/core",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/di",
      "npm:angular2@2.0.0-alpha.44/src/core/util",
      "npm:zone.js@0.5.8/lib/patch/browser",
      "npm:angular2@2.0.0-alpha.44/src/core/facade",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/application",
      "npm:angular2@2.0.0-alpha.44/src/core/bootstrap",
      "npm:angular2@2.0.0-alpha.44/src/core/services",
      "npm:angular2@2.0.0-alpha.44/src/core/linker",
      "npm:angular2@2.0.0-alpha.44/src/core/lifecycle",
      "npm:angular2@2.0.0-alpha.44/src/core/zone",
      "npm:angular2@2.0.0-alpha.44/src/core/render",
      "npm:angular2@2.0.0-alpha.44/src/core/directives",
      "npm:angular2@2.0.0-alpha.44/src/core/debug",
      "npm:angular2@2.0.0-alpha.44/src/core/forms",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/profile",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:zone.js@0.5.8/lib/patch/promise",
      "npm:zone.js@0.5.8/lib/keys",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.44/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.44/src/core/util/decorators",
      "npm:angular2@2.0.0-alpha.44/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.44/src/core/di/forward_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/di/injector",
      "npm:angular2@2.0.0-alpha.44/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.44/src/core/di/key",
      "npm:angular2@2.0.0-alpha.44/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/di/opaque_token",
      "npm:zone.js@0.5.8/lib/patch/functions",
      "npm:zone.js@0.5.8/lib/patch/mutation-observer",
      "npm:zone.js@0.5.8/lib/patch/register-element",
      "npm:zone.js@0.5.8/lib/patch/define-property",
      "npm:zone.js@0.5.8/lib/patch/websocket",
      "npm:zone.js@0.5.8/lib/patch/event-target",
      "npm:zone.js@0.5.8/lib/patch/property-descriptor",
      "npm:zone.js@0.5.8/lib/patch/geolocation",
      "npm:zone.js@0.5.8/lib/patch/file-reader",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/lang",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/async",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/async_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/default_pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/slice_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/application_common",
      "npm:angular2@2.0.0-alpha.44/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/app_root_url",
      "npm:angular2@2.0.0-alpha.44/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/services/title",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/query_list",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_container_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/life_cycle/life_cycle",
      "npm:angular2@2.0.0-alpha.44/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_class",
      "npm:angular2@2.0.0-alpha.44/src/core/render/render",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_for",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_if",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_style",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.44/src/core/directives/observable_list_diff",
      "npm:angular2@2.0.0-alpha.44/src/core/debug/debug_element",
      "npm:angular2@2.0.0-alpha.44/src/core/debug/debug_element_view_listener",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/model",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/validators",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/form_builder",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/wtf_impl",
      "npm:process@0.11.2",
      "npm:zone.js@0.5.8/lib/utils",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/collection",
      "npm:angular2@2.0.0-alpha.44/src/core/di/type_literal",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/promise",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subject",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/exception_handler",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/invalid_pipe_argument_exception",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/intl",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/runtime_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/source_module",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_parser",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_normalizer",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/runtime_metadata",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/style_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/command_compiler",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/schema/dom_element_schema_registry",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/anchor_based_app_root_url",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/browser_adapter",
      "npm:angular2@2.0.0-alpha.44/src/core/testability/browser_testability",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/xhr",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/xhr_impl",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.44/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.44/src/core/render/api",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.44/src/core/platform_bindings",
      "npm:angular2@2.0.0-alpha.44/src/animate/animation_builder",
      "npm:angular2@2.0.0-alpha.44/src/animate/browser_details",
      "npm:angular2@2.0.0-alpha.44/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_pool",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_manager_utils",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/number_value_accessor",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-alpha.44/src/core/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/parser",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection_util",
      "npm:process@0.11.2/browser",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflection_capabilities",
      "npm:angular2@2.0.0-alpha.44/src/core/reflection/reflector",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subscription",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/Subscriber",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/subjects/SubjectSubscription",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/util",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/selector",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/interfaces",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/template_preparser",
      "npm:angular2@2.0.0-alpha.44/src/transform/template_compiler/change_detector_codegen",
      "npm:angular2@2.0.0-alpha.44/src/core/dom/generic_browser_adapter",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/shadow_css",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.44/src/animate/css_animation_builder",
      "npm:angular2@2.0.0-alpha.44/src/core/facade/math",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_injector",
      "npm:angular2@2.0.0-alpha.44/src/core/compiler/change_definition_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/element_binder",
      "npm:angular2@2.0.0-alpha.44/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-alpha.44/render",
      "npm:angular2@2.0.0-alpha.44/src/core/render/view_factory",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.44/src/core/render/view",
      "npm:angular2@2.0.0-alpha.44/src/core/render/dom/util",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/root",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/throwError",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/tryOrOnError",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/Symbol_observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.4/dist/cjs/util/noop",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_logic_util",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.44/src/animate/css_animation_options",
      "npm:angular2@2.0.0-alpha.44/src/animate/animation",
      "npm:angular2@2.0.0-alpha.44/src/core/linker/event_config",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/pipes",
      "npm:angular2@2.0.0-alpha.44/src/core/change_detection/observable_facade"
    ]
  },

  packages: {
    "app": {
      "main": "main",
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular2": "npm:angular2@2.0.0-alpha.44",
    "app": "src",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@0.9.18",
    "es6-shim": "github:es-shims/es6-shim@0.33.6",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.5",
    "typescript": "npm:typescript@1.6.2",
    "zone.js": "npm:zone.js@0.5.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
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
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2@2.0.0-alpha.44": {
      "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.1",
      "zone.js": "npm:zone.js@0.5.8"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:cipher-base@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reflect-metadata@0.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
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
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.8": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
