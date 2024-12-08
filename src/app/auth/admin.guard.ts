import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return localStorage.getItem("login")
    ? localStorage.getItem("role") === 'Admin'
      ? true
      : inject(Router).navigate(['/user'])
    : inject(Router).navigate(['/login']);
};
