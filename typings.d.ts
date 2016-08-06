/// <reference path="typings/index.d.ts" />

declare namespace ionfuture {
    interface IPage {
        __stateName?: string;
    }
    
    interface ISideMenuConfig extends ng.ui.IState {
        menuHeaderBarClass?: string;
        menuHeaderBarTitle?: string;
        navBarClass?: string;
        menuTriggerButtonClass?: string;
    }
        
    interface ISideMenu {
        __menuStateName?: string;
    }

    interface INavController {
        push(page: ionfuture.IPage, params?: any, options?: ionic.navigation.IonicHistoryNextViewOptions);

        pop(params?: any, options?: ionic.navigation.IonicHistoryNextViewOptions);

        popMany(backCount?: number);
    }

    interface INavParams {
        get(parameter: string): any;
    }
}