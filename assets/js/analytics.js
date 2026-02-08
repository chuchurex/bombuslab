/**
 * Bombus Lab - Analytics Configuration
 *
 * INSTRUCCIONES:
 * 1. Reemplaza 'G-XXXXXXXXXX' con tu Google Analytics 4 Measurement ID
 * 2. Reemplaza 'XXXXXXXXXXXXXXX' con tu Meta Pixel ID
 * 3. Ambos se obtienen desde las consolas de Google Analytics y Meta Business Suite
 */

// ========================================
// CONFIGURACIÓN - EDITA ESTOS VALORES
// ========================================
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';  // Tu GA4 ID aquí
const META_PIXEL_ID = 'XXXXXXXXXXXXXXX';     // Tu Meta Pixel ID aquí

// ========================================
// GOOGLE ANALYTICS 4
// ========================================
if (GA4_MEASUREMENT_ID && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    // Load gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID);

    // Make gtag available globally
    window.gtag = gtag;
}

// ========================================
// META PIXEL (Facebook)
// ========================================
if (META_PIXEL_ID && META_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
}

// ========================================
// EVENTOS PERSONALIZADOS PARA BOMBUS
// ========================================

/**
 * Trackea cuando un usuario ve un modelo específico
 */
function trackViewProduct(modeloId, modeloNombre, categoria, precio) {
    // GA4
    if (window.gtag) {
        gtag('event', 'view_item', {
            currency: 'CLP',
            value: precio,
            items: [{
                item_id: modeloId,
                item_name: modeloNombre,
                item_category: categoria,
                price: precio
            }]
        });
    }

    // Meta Pixel
    if (window.fbq) {
        fbq('track', 'ViewContent', {
            content_ids: [modeloId],
            content_name: modeloNombre,
            content_category: categoria,
            content_type: 'product',
            value: precio,
            currency: 'CLP'
        });
    }
}

/**
 * Trackea cuando un usuario configura un velador
 */
function trackConfigureProduct(modeloId, modeloNombre, config) {
    // GA4
    if (window.gtag) {
        gtag('event', 'customize_product', {
            item_id: modeloId,
            item_name: modeloNombre,
            dimensions: `${config.ancho}x${config.prof}x${config.alto}`,
            material: config.colorName,
            gadgets: config.gadgets.join(',')
        });
    }

    // Meta Pixel
    if (window.fbq) {
        fbq('trackCustom', 'CustomizeProduct', {
            content_id: modeloId,
            content_name: modeloNombre,
            dimensions: `${config.ancho}x${config.prof}x${config.alto}`,
            material: config.colorName
        });
    }
}

/**
 * Trackea cuando un usuario inicia cotización por WhatsApp
 */
function trackInitiateCheckout(modeloId, modeloNombre, total, config) {
    // GA4
    if (window.gtag) {
        gtag('event', 'begin_checkout', {
            currency: 'CLP',
            value: total,
            items: [{
                item_id: modeloId,
                item_name: modeloNombre,
                price: total,
                quantity: 1
            }]
        });
    }

    // Meta Pixel
    if (window.fbq) {
        fbq('track', 'InitiateCheckout', {
            content_ids: [modeloId],
            content_name: modeloNombre,
            content_type: 'product',
            value: total,
            currency: 'CLP',
            num_items: 1
        });
    }
}

/**
 * Trackea click en WhatsApp CTA
 */
function trackWhatsAppClick(modeloId, modeloNombre, total) {
    // GA4
    if (window.gtag) {
        gtag('event', 'contact', {
            method: 'WhatsApp',
            item_id: modeloId,
            item_name: modeloNombre,
            value: total,
            currency: 'CLP'
        });
    }

    // Meta Pixel
    if (window.fbq) {
        fbq('track', 'Contact', {
            content_ids: [modeloId],
            content_name: modeloNombre,
            value: total,
            currency: 'CLP'
        });
    }
}

/**
 * Trackea navegación entre categorías
 */
function trackCategoryView(categoria) {
    // GA4
    if (window.gtag) {
        gtag('event', 'view_item_list', {
            item_list_id: categoria,
            item_list_name: categoria.charAt(0).toUpperCase() + categoria.slice(1)
        });
    }

    // Meta Pixel
    if (window.fbq) {
        fbq('trackCustom', 'ViewCategory', {
            category: categoria
        });
    }
}
