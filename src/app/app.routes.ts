import { Routes } from '@angular/router';
import {isAuthenticatedGuard, isNotAuthenticatedGuard} from "./auth/guards";
import AuthLoginPageComponent from "./auth/components/pages/auth-login-page/auth-login-page.component";
import {
  InventoryCategoriesPageComponent
} from "./dashboard/components/pages/inventory/pages/categories/components/inventory-categories-page/inventory-categories-page.component";
import {
  InventoryCategoryPageComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/components/inventory-category-page/inventory-category-page.component";
import {
  InitialExistenceListComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-list/initial-existence-list.component";
import {
  InitialExistenceCreateComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-create/initial-existence-create.component";
import {
  InitialExistenceEditComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-edit/initial-existence-edit.component";
import {
  EntriesListComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/entries/pages/entries-list/entries-list.component";
import {
  EntriesAddComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/entries/pages/entries-add/entries-add.component";
import {
  EntriesEditComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/entries/pages/entries-edit/entries-edit.component";
import {
  DecreasesListComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/decreases/pages/decreases-list/decreases-list.component";
import {
  DecreasesSubtractComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/decreases/pages/decreases-subtract/decreases-subtract.component";
import {
  DecreasesEditComponent
} from "./dashboard/components/pages/inventory/pages/categories/pages/category/pages/decreases/pages/decreases-edit/decreases-edit.component";
import {
  InventoryCreateCategoryComponent
} from "./dashboard/components/pages/inventory/pages/inventory-create-category/inventory-create-category.component";
import {
  InventoryEditCategoryComponent
} from "./dashboard/components/pages/inventory/pages/inventory-edit-category/inventory-edit-category.component";
import {
  ProductCategoriesPageComponent
} from "./dashboard/components/pages/product/pages/categories/components/product-categories-page/product-categories-page.component";
import {
  ProductCategoryListComponent
} from "./dashboard/components/pages/product/pages/categories/pages/category/pages/product-category-list/product-category-list.component";
import {
  ProductCategoryCreateComponent
} from "./dashboard/components/pages/product/pages/categories/pages/category/pages/product-category-create/product-category-create.component";
import {
  ProductCategoryEditComponent
} from "./dashboard/components/pages/product/pages/categories/pages/category/pages/product-category-edit/product-category-edit.component";
import {
  ProductCreateCategoryComponent
} from "./dashboard/components/pages/product/pages/product-create-category/product-create-category.component";
import {
  ProductEditCategoryComponent
} from "./dashboard/components/pages/product/pages/product-edit-category/product-edit-category.component";
import {SaleListComponent} from "./dashboard/components/pages/sale/pages/sale-list/sale-list.component";
import {SaleViewComponent} from "./dashboard/components/pages/sale/pages/sale-view/sale-view.component";
import {
  SaleCreateComponent
} from "./dashboard/components/pages/sale/pages/sale-create/pages/sale-create/sale-create.component";
import {
  SaleEditEditProductComponent
} from "./dashboard/components/pages/sale/pages/sale-edit/pages/sale-edit-edit-product/sale-edit-edit-product.component";
import {
  SaleEditAddProductComponent
} from "./dashboard/components/pages/sale/pages/sale-edit/pages/sale-edit-add-product/sale-edit-add-product.component";
import {SaleEditComponent} from "./dashboard/components/pages/sale/pages/sale-edit/pages/sale-edit/sale-edit.component";
import {
  SaleCreateAddProductComponent
} from "./dashboard/components/pages/sale/pages/sale-create/pages/sale-create-add-product/sale-create-add-product.component";
import {
  SaleCreateEditProductComponent
} from "./dashboard/components/pages/sale/pages/sale-create/pages/sale-create-edit-product/sale-create-edit-product.component";
import {ReportsPageComponent} from "./dashboard/components/pages/reports/components/reports-page/reports-page.component";
import {
  InventoryStatusReportMonthSearchComponent
} from "./dashboard/components/pages/reports/pages/inventory-status/pages/inventory-status-report-month-search/inventory-status-report-month-search.component";
import {
  InventoryStatusComponent
} from "./dashboard/components/pages/reports/pages/inventory-status/pages/inventory-status/inventory-status.component";
import {
  MostSelledProductsComponent
} from "./dashboard/components/pages/reports/pages/most-selled-products/pages/most-selled-products/most-selled-products.component";
import {
  MostSelledProductsReportMonthSearchComponent
} from "./dashboard/components/pages/reports/pages/most-selled-products/pages/most-selled-products-report-month-search/most-selled-products-report-month-search.component";
import {
  HamburguerReportMonthSearchComponent
} from "./dashboard/components/pages/reports/pages/hamburguer-report/pages/hamburguer-report-month-search/hamburguer-report-month-search.component";
import {
  HamburguerReportComponent
} from "./dashboard/components/pages/reports/pages/hamburguer-report/pages/hamburguer-report/hamburguer-report.component";
import {
  IncomeByDateReportDaySearchComponent
} from "./dashboard/components/pages/reports/pages/income-by-date/pages/income-by-date-report-day-search/income-by-date-report-day-search.component";
import {
  IncomeByDateComponent
} from "./dashboard/components/pages/reports/pages/income-by-date/pages/income-by-date/income-by-date.component";

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadComponent: () => import('./auth/components/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'login',
        title: 'Login Page',
        component: AuthLoginPageComponent
      },
      { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/components/layout/layout.component'),
    children: [
      {
        path: 'inventory',
        canActivate: [ isAuthenticatedGuard ],
        title: 'Inventory Layout Page',
        loadComponent: () => import('./dashboard/components/pages/inventory/components/inventory-layout/inventory-layout.component'),
        children: [
          {
            path: 'categories',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Categories Layout',
            loadComponent: () => import('./dashboard/components/pages/inventory/pages/categories/components/inventory-categories-layout/inventory-categories-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Categories',
                component: InventoryCategoriesPageComponent
              },
              {
                path: ':id',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Category Layout',
                loadComponent: () => import('./dashboard/components/pages/inventory/pages/categories/pages/category/components/category-layout/category-layout.component'),
                children: [
                  {
                    path: '',
                    title: 'Category Page',
                    canActivate: [ isAuthenticatedGuard ],
                    component: InventoryCategoryPageComponent
                  },
                  {
                    path: 'initial-existence',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Initial Existence Layout',
                    loadComponent: () => import('./dashboard/components/pages/inventory/pages/categories/pages/category/pages/initialExistence/components/initial-existence-layout/initial-existence-layout.component'),
                    children: [
                      {
                        path: 'list',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'List Initial Existence',
                        component: InitialExistenceListComponent
                      },
                      {
                        path: 'create',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Create Initial Existence',
                        component: InitialExistenceCreateComponent
                      },
                      {
                        path: ':id/edit',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Edit Initial Existence',
                        component: InitialExistenceEditComponent
                      },
                      { path: '**', redirectTo: 'list' }
                    ]
                  },
                  {
                    path: 'entries',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Entries Layout',
                    loadComponent: () => import('./dashboard/components/pages/inventory/pages/categories/pages/category/pages/entries/components/entries-layout/entries-layout.component'),
                    children: [
                      {
                        path: 'list',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'List Entries',
                        component: EntriesListComponent
                      },
                      {
                        path: 'add',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Add Entries',
                        component: EntriesAddComponent
                      },
                      {
                        path: 'edit',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Edit Entries',
                        component: EntriesEditComponent
                      },
                      { path: '**', redirectTo: 'list' }
                    ]
                  },
                  {
                    path: 'decreases',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Decreases Layout',
                    loadComponent: () => import('./dashboard/components/pages/inventory/pages/categories/pages/category/pages/decreases/components/decreases-layout/decreases-layout.component'),
                    children: [
                      {
                        path: 'list',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'List Decreases',
                        component: DecreasesListComponent
                      },
                      {
                        path: 'subtract',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Subtract Decreases',
                        component: DecreasesSubtractComponent
                      },
                      {
                        path: 'edit',
                        canActivate: [ isAuthenticatedGuard ],
                        title: 'Edit Decreases',
                        component: DecreasesEditComponent
                      },
                      { path: '**', redirectTo: 'list' }
                    ]
                  },
                  { path: '**', redirectTo: '' }
                ]
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: 'create',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Create Category',
            component: InventoryCreateCategoryComponent
          },
          {
            path: ':id/edit',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Edit Category',
            component: InventoryEditCategoryComponent
          },
          { path: '**', redirectTo: 'categories' }
        ]
      },
      {
        path: 'product',
        canActivate: [ isAuthenticatedGuard ],
        title: 'Product Layout Page',
        loadComponent: () => import('./dashboard/components/pages/product/components/product-layout/product-layout.component'),
        children: [
          {
            path: 'categories',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Categories Layout',
            loadComponent: () => import('./dashboard/components/pages/product/pages/categories/components/product-categories-layout/product-categories-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Categories',
                component: ProductCategoriesPageComponent
              },
              {
                path: ':id',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Category Layout',
                loadComponent: () => import('./dashboard/components/pages/product/pages/categories/pages/category/components/category-layout/category-layout.component'),
                children: [
                  {
                    path: 'list',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'List',
                    component: ProductCategoryListComponent
                  },
                  {
                    path: 'create',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Create',
                    component: ProductCategoryCreateComponent
                  },
                  {
                    path: ':id/edit',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Edit',
                    component: ProductCategoryEditComponent
                  },
                  { path: '**', redirectTo: 'list' }
                ]
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: 'create',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Create Category',
            component: ProductCreateCategoryComponent
          },
          {
            path: ':id/edit',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Edit Category',
            component: ProductEditCategoryComponent
          },
          { path: '**', redirectTo: 'categories' }
        ]
      },
      {
        path: 'sale',
        canActivate: [ isAuthenticatedGuard ],
        title: 'Sale Layout Page',
        loadComponent: () => import('./dashboard/components/pages/sale/components/sale-layout/sale-layout.component'),
        children: [
          {
            path: 'list',
            canActivate: [ isAuthenticatedGuard ],
            title: 'List',
            component: SaleListComponent
          },
          {
            path: 'create',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Create Layout',
            loadComponent: () => import('./dashboard/components/pages/sale/pages/sale-create/components/sale-create-layout/sale-create-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Create',
                component: SaleCreateComponent
              },
              {
                path: ':id/add',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Add',
                component: SaleCreateAddProductComponent
              },
              {
                path: ':id/edit',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Edit',
                component: SaleCreateEditProductComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: ':id/edit',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Edit',
            loadComponent: () => import('./dashboard/components/pages/sale/pages/sale-edit/components/sale-edit-layout/sale-edit-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Edit',
                component: SaleEditComponent
              },
              {
                path: ':id/add',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Add',
                component: SaleEditAddProductComponent
              },
              {
                path: ':id/edit',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Edit',
                component: SaleEditEditProductComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: ':id/view',
            canActivate: [ isAuthenticatedGuard ],
            title: 'View',
            component: SaleViewComponent
          },
          { path: '**', redirectTo: 'list' }
        ]
      },
      {
        path: 'reports',
        canActivate: [ isAuthenticatedGuard ],
        title: 'Reports Layout Page',
        loadComponent: () => import('./dashboard/components/pages/reports/components/reports-layout/reports-layout.component'),
        children: [
          {
            path: '',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Reports Page',
            component: ReportsPageComponent
          },
          {
            path: 'inventory-status',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Inventory Status Page Layout',
            loadComponent: () => import('./dashboard/components/pages/reports/pages/inventory-status/components/inventory-status-layout/inventory-status-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Month Search Page',
                component: InventoryStatusReportMonthSearchComponent
              },
              {
                path: 'search-result',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Inventory Status Search Result Page',
                component: InventoryStatusComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: 'most-selled-products',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Most Selled Products Page Layout',
            loadComponent: () => import('./dashboard/components/pages/reports/pages/most-selled-products/components/most-selled-products-layout/most-selled-products-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Month Search Page',
                component: MostSelledProductsReportMonthSearchComponent
              },
              {
                path: 'search-result',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Most Selled Products Search Result Page',
                component: MostSelledProductsComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: 'hamburguer-report',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Hamburguer Page Layout',
            loadComponent: () => import('./dashboard/components/pages/reports/pages/hamburguer-report/components/hamburguer-report-layout/hamburguer-report-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Month Search Page',
                component: HamburguerReportMonthSearchComponent
              },
              {
                path: 'search-result',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Hamburguer Report Search Result Page',
                component: HamburguerReportComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          {
            path: 'income-by-date',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Income By Date Page Layout',
            loadComponent: () => import('./dashboard/components/pages/reports/pages/income-by-date/components/income-by-date-layout/income-by-date-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Day Search Page',
                component: IncomeByDateReportDaySearchComponent
              },
              {
                path: 'search-result',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Hamburguer Report Search Result Page',
                component: IncomeByDateComponent
              },
              { path: '**', redirectTo: '' }
            ]
          },
          { path: '**', redirectTo: '' }
        ]
      },
      { path: '**', redirectTo: 'inventory' }
    ]
  },
  { path: '**', redirectTo: 'auth' },
];
