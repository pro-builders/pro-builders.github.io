// AWON IRINSE AGBAALE GBOGBO OJU EWE
const ApoAgbaale = "Pro Builders";

self.addEventListener('install', ayeye => {
    ayeye.waitUntil(
        console.log( "Ifiloole ti waye!!!" )
    )
});

self.addEventListener("activate", ayeye => {
    ayeye.waitUntil(
        caches.keys()
        .then( gbogboKokoro => {
            return Promise.all(
                gbogboKokoro.map( kokoroKookan => {
                    if ( kokoroKookan !== ApoAgbaale ) {
                        caches.delete(kokoroKookan);
                    }
                })
            )
        })
    )
});

self.addEventListener("fetch", ayeye => {
    ayeye.respondWith(
        fetch( ayeye.request )
            .then( nkanAbo => {
                const nkan = nkanAbo.clone();
                caches.open( ApoAgbaale )
                .then( nkanIpamo => {
                        nkanIpamo.put( ayeye.request, nkan )
                    })
                    return nkanAbo;
                })
                .catch( 
                asise => caches.match( ayeye.request )
                .then( nkanAbo => nkanAbo )
            )
    )
});
