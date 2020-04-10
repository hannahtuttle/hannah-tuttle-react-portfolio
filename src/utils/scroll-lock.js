const $body = document.querySelector('body');

export const enable = () => {
    $body.style.overflow = 'hidden';
  };

export const disable = () => {
  $body.style.removeProperty('overflow');
};