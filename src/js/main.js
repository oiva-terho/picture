import { modals, sliders, Forms, showMoreStyles, calc } from "./modules";

'use strict';

try { modals(); } catch { console.log('Modal windows are broken'); }
try { sliders({ 
        slidesSelector: '.feedback-slider-item', 
        prevSelector: '.main-prev-btn', 
        nextSelector: '.main-next-btn' 
    }); 
    sliders({ 
        slidesSelector: '.main-slider-item', 
        vertical: true 
    });
} catch { console.log('Sliders are broken'); }
try { new Forms().init(); } catch { console.log('Forms are broken'); }
try { 
    showMoreStyles('.button-styles', '#styles .row'); 
} catch { console.log('Styles load is broken'); }
try { calc({
    size: '#size', 
    material: '#material', 
    options: '#options input', 
    promocode: '.promocode', 
    result: '.calc-price'
}); } catch (error) { console.log('Calculator is broken', error);}