function saludar(mensaje){
    // NULLISH
    return mensaje ?? null ?? false ?? null
}

null || "a"//?
null ?? "a"//?

undefined || "a"//?
undefined ?? "a"//?

false || "a"//?
false ?? "a"//?

"a" || "a" //?
"a" ?? "a" //?



saludar(null) // ?
