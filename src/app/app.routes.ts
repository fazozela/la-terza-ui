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
      { path: '**', redirectTo: 'inventory' }
    ]
  },
  { path: '**', redirectTo: 'auth' },
];
