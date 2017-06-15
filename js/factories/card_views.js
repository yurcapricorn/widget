define([
    'https://c20244.shared.hc.ru/test1/js/js/views/card_visible.js',
    'https://c20244.shared.hc.ru/test1/js/js/views/lead_card.js'
    ],
  function (CardVisible, LeadCard) {
    /**
     * @function FactoryForCardViews
     * @param {String} element_type
     * @param {Object} params
     * @return {SampleWidgetCardVisible}
     */
    return function (element_type, params) {
      var result = null;

      switch (element_type) {
        case 'leads':
          result = new LeadCard(params);
          break;
        default:
          result = new CardVisible(params);
          break;
      }

      return result;
    };
  }
);
