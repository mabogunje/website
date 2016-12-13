<?php

/**
 * Additional functionality for My Developer theme
 */

namespace Grav\Theme;

class DeveloperMe extends Developer {
  
  // Use developer-me.yaml for theme_config
  public function onTwigSiteVariables() {
    $this->grav['twig']->twig_vars['theme_config'] = $this->grav['config']->get('themes.developer-me');
  }
}

?>
