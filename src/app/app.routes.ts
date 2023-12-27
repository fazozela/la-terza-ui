import { Routes } from '@angular/router';
import {isAuthenticatedGuard, isNotAuthenticatedGuard} from "./auth/guards";
import CreateCategoryComponent
  from "./dashboard/components/pages/inventory/components/pages/create-category/create-category.component";
import EditCategoryComponent
  from "./dashboard/components/pages/inventory/components/pages/edit-category/edit-category.component";
import AuthLoginPageComponent from "./auth/components/pages/auth-login-page/auth-login-page.component";
import {
  CategoriesPageComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/components/categories-page/categories-page.component";
import {
  CategoryPageComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/components/category-page/category-page.component";
import {
  InitialExistenceListComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-list/initial-existence-list.component";
import {
  InitialExistenceEditComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-edit/initial-existence-edit.component";
import {
  InitialExistenceCreateComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/initialExistence/pages/initial-existence-create/initial-existence-create.component";
import {
  EntriesListComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/entries/pages/entries-list/entries-list.component";
import {
  EntriesAddComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/entries/pages/entries-add/entries-add.component";
import {
  EntriesEditComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/entries/pages/entries-edit/entries-edit.component";
import {
  DecreasesListComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/decreases/pages/decreases-list/decreases-list.component";
import {
  DecreasesSubtractComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/decreases/pages/decreases-subtract/decreases-subtract.component";
import {
  DecreasesEditComponent
} from "./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/decreases/pages/decreases-edit/decreases-edit.component";

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
            loadComponent: () => import('./dashboard/components/pages/inventory/components/pages/categories/components/categories-layout/categories-layout.component'),
            children: [
              {
                path: '',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Categories',
                component: CategoriesPageComponent
              },
              {
                path: ':id',
                canActivate: [ isAuthenticatedGuard ],
                title: 'Category Layout',
                loadComponent: () => import('./dashboard/components/pages/inventory/components/pages/categories/pages/category/components/category-layout/category-layout.component'),
                children: [
                  {
                    path: '',
                    title: 'Category Page',
                    canActivate: [ isAuthenticatedGuard ],
                    component: CategoryPageComponent
                  },
                  {
                    path: 'initial-existence',
                    canActivate: [ isAuthenticatedGuard ],
                    title: 'Initial Existence Layout',
                    loadComponent: () => import('./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/initialExistence/components/initial-existence-layout/initial-existence-layout.component'),
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
                    loadComponent: () => import('./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/entries/components/entries-layout/entries-layout.component'),
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
                    loadComponent: () => import('./dashboard/components/pages/inventory/components/pages/categories/pages/category/pages/decreases/components/decreases-layout/decreases-layout.component'),
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
            component: CreateCategoryComponent
          },
          {
            path: ':id/edit',
            canActivate: [ isAuthenticatedGuard ],
            title: 'Edit Category',
            component: EditCategoryComponent
          },
          { path: '**', redirectTo: 'categories' }
        ]
      },
      { path: '**', redirectTo: 'inventory' }
    ]
  },
  { path: '**', redirectTo: 'auth' },
];
