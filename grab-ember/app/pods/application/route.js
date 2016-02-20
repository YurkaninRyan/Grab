import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', () => {
      var $sidebar = $("#js-sidebar"),
        $overlay = $("#js-nav-overlay"),
        $window = $(window),
        $body = $('body'),
        $toggleOn = $('#js-toggle-side-on'),
        $toggleOff = $('#js-toggle-side-off'),
        openState = false;

    function resize() {
        if(!openState) { return; }
        if ($window.width() > 720) {
          $sidebar.removeClass("global-nav__side-nav--opened");
          $overlay.removeClass("global-nav-overlay--active");
          $body.removeClass("page-no-scroll");
          openState = false;
        }
    }
    function handleSlideToggle() {
        if ($sidebar.hasClass("global-nav__side-nav--opened")) {
          $sidebar.removeClass("global-nav__side-nav--opened");
          $overlay.removeClass("global-nav-overlay--active");
          $body.removeClass("page-no-scroll");
          openState = false;
          return;
        }
        if(document.body.scrollHeight > document.body.clientHeight) {
            $body.css('top', - (document.documentElement.scrollTop) + 'px')
                 .addClass("page-no-scroll");
        }
        $sidebar.addClass("global-nav__side-nav--opened");
        $overlay.addClass("global-nav-overlay--active");
        openState = true;
    }
    $window.resize(resize).trigger('resize');
    $toggleOn.click(handleSlideToggle);
    $toggleOff.click(handleSlideToggle);
    $overlay.click(handleSlideToggle);
    });
  }
});
