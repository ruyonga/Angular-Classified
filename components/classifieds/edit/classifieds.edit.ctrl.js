(function () {
    "use strict";

    angular
        .module('ngClassifieds')
        .controller('editClassifiedCtrl', function ($scope, $mdSidenav, $timeout, $state, $mdDialog, classifiedsFactory) {
            var vm = this;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassified;
            vm.classified = $state.params.classified;  // pass the classifef objec to the vm param

            //this prevent loop[indefinite loop]
            $timeout(function () {
                $mdSidenav('left')
                    .open();
            });

            //watchers listen for actions form the users and can navigate based the value
            //remember to add the state to the injections
            $scope.$watch('vm.sidenavOpen', function (sidenav) {

                if (sidenav === false) {
                    console.log("value changed 2");
                    $mdSidenav('left')
                        .close()
                        .then(function () {
                            $state.go('classifieds');
                        });
                }

            });

            function closeSidebar() {
                vm.sidenavOpen = false;
            }

            function saveClassified(classifieds) {

                if (classifieds) {


                    classifieds.contact = {
                        name: "Ruyonga daniel",
                        phone: "078899000",
                        email: "druyonga@gmail.com"
                    }

                    //send thois object tot he classfied control[[arrent]]
                    $scope.$emit('newClassified', classifieds);
                    vm.sidenavOpen = false;
                }
            }

            // vm.valueToChange = 1;
            // $timeout(function(){
            // 	vm.valueToChange = 2;
            // },2000);

        });
})();