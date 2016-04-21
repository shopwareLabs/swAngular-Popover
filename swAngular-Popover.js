(function () {
    angular.module('swAngularPopover', [])
        .service('swPopoverService', swPopoverService)
        .directive('swAngularPopover', swAngularPopover);


    swPopoverService.$inject = [];
    function swPopoverService() {
        var self = this;

        self.popoverRepository = {};
        self.close = function (id) {
            self.popoverRepository[id].popover('destroy');
        };
    }

    swAngularPopover.$inject = ['swPopoverService', '$compile'];
    function swAngularPopover(swPopoverService, $compile) {
        return {
            restrict: 'A',
            scope: {
                content: '@swAngularPopover',
                url: '@swUrl',
                options: '=swOptions',
                popoverId: '@swPopoverId'
            },
            link: link
        };

        function link($scope, $element) {
            swPopoverService.popoverRepository[$scope.popoverId] = $element;

            var htmlParam = true;
            var animationParam = true;
            var placementParam = 'auto';
            var triggerParam = 'click'; //click | hover | focus | manual
            var titleParam = '';
            var delayParam = 0;
            var containerParam = false;

            for (var fieldKey in $scope.options) {
                switch (fieldKey) {
                    case 'html':
                        htmlParam = $scope.options.html;
                        break;
                    case 'animation':
                        animationParam = $scope.options.animation;
                        break;
                    case 'placement':
                        placementParam = $scope.options.placement;
                        break;
                    case 'trigger':
                        triggerParam = $scope.options.trigger;
                        break;
                    case 'title':
                        titleParam = $scope.options.title;
                        break;
                    case 'delay':
                        delayParam = $scope.options.delay;
                        break;
                    case 'container':
                        containerParam = $scope.options.container;
                        break;
                    default:
                        break;
                }
            }

            var contentElement;
            if ($scope.url && $scope.url.length > 0) {
                /*
                 * need two capsulating elements
                 * probably because:
                 *  - contents() dismisses one layer
                 *  - <div data-ng-include>-element is compiled to comment
                 *  - popover dismisses comments without encapsulating html element
                 */
                contentElement = angular.element('<div><div><div data-ng-include="\'' + $scope.url + '\'"></div></div></div>');
            } else {
                contentElement = angular.element('<span>' + $scope.content + '</span>');
            }
            $compile(contentElement)($scope.$parent);

            // Store contents
            var contents = contentElement.contents();

            var isShown = false;
            $element.bind(triggerParam, function () {
                if (!isShown) {

                    $element.popover({
                        html: htmlParam,
                        content: contents,
                        animation: animationParam,
                        placement: placementParam,
                        trigger: 'manual',
                        title: titleParam,
                        delay: delayParam,
                        container: containerParam
                    });
                    $element.on('shown.bs.popover', function () {
                        isShown = true;
                    });
                    $element.on('hidden.bs.popover', function () {
                        isShown = false;
                    });
                    $element.popover('show');
                } else {
                    $element.popover('destroy');
                }
            });
        }
    }
}());
