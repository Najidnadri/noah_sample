import {defineNuxtConfig} from 'nuxt/config';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
            routes: [
                '/'
            ]
        }
    },
    app: {
        head: {
            title: 'Noah Sample | Home',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name:'description', content: 'Noah Redesign Concept Live Preview'},
                { name:"keywords", content:"Noah Redesign Concept Live Preview" },
                { property:"image:alt_text", content:"Noah Sample | Home" },
                {property:"og:site_name", content:"Noah Sample | Home" },
                {property:"og:type", content:"website" },
                {property:"og:url", content:"https://noah-sample-najid.web.app/" },
                {property:"og:title", content:"Noah Sample | Home" },
                {property:"og:description", content:"Noah Redesign Concept Live Preview" },
                {property:"og:image", content:"" },
                {property:"og:image:url", content:"" },
                {property:"og:image:secure_url", content:"" },
                {name:"twitter:card", content:"summary_large_image" },
                {name:"twitter:description", content:"Noah Redesign Concept Live Preview" },
                {name:"twitter:title", content:"Noah Sample | Home" },
                { name:"twitter:url", content:"https://noah-sample-najid.web.app/" },
                { name:"twitter:image", content:"" },
                { name:"MobileOptimized", content:"width" },
                { name:"HandheldFriendly", content:"true" },
                { name:"apple-mobile-web-app-capable", content:"yes"},
                { name:"apple-mobile-web-app-status-bar-style", content:"rgba(246, 246, 246, 1)"},
                { content:"True", name:"HandheldFriendly"},
                
                { name:"viewport", content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}, 
                { name:"color-scheme", content:"light"},
                { name:"theme-color", content:"rgba(246, 246, 246, 1)", id:"theme-color"},
            ],
            link: [
                { rel:"icon", href: '/favicon.ico', sizes: "any"},
            ]
        },
    },
    css: [
        '@/assets/css/main.css',
        '@/assets/css/base.css',
        '@/assets/css/locomotive.css'
    ],

    components: true,

    modules: [
        'nuxt-icon',
        '@unocss/nuxt',
        'nuxt-delay-hydration',
        // [
        //   '@nuxtjs/firebase',
        //   {
        //     config: {
        //       apiKey: "",
        //       authDomain: "",
        //       projectId: "",
        //       storageBucket: "",
        //       messagingSenderId: "",
        //       appId: "",
        //       measurementId: ""
        //     },
        //     services: {
        //       firestore: true
        //     }
        //   }
        // ]
    ],


    unocss: {
        preflight: true,
        uno: true,
    },

    delayHydration: {
        mode: 'mount',
        // enables nuxt-delay-hydration in dev mode for testing  
        debug: process.env.NODE_ENV === 'development'
    },  

    build: {
        transpile: [
            'vue3-tel-input'
        ]
    },


})

