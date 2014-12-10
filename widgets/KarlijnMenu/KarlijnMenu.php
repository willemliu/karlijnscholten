<?php  
  namespace Foundation;
  /**
   * KarlijnMenu class
   */
  final class KarlijnMenu extends FoundationWidget
  {
    protected $name = "KarlijnMenu";

    /**
     * Returns the HTML of this widget.
     */
    public function getHtml($id, array $fields = array()) {
      $editVars = $this->getEditVars();    
      $html = '';
      $dbFields = $this->foundationWidgets->getWidgetContentFromDb($id);
      // Classes
      $classes = json_decode($this->getFieldValue($dbFields, $fields, 'classes'));
      if(is_array($classes)) {
        $classes = implode(' ', $classes);
      }
      // Anchor
      $anchorNameHtml = $this->getFieldValue($dbFields, $fields, 'anchorName');
      if(empty($anchorNameHtml) === false) {
$anchorNameHtml = <<<EOT
        <a id="{$anchorNameHtml}"></a>
EOT;
      }

      $echo = $this->heredoc->getHeredoc();
$html = <<<EOT
      {$anchorNameHtml}
      <div id="{$id}" class="{$echo($editVars['editable'])} navigation sticky karlijnMenu {$echo($editVars['dropTarget'])} {$classes}" {$echo($editVars['draggable'])} data-foundation-cms-widget="{$echo($this->name)}">
        <div class="toolButtons">
          <div class="small-6 columns editWidget" title="Edit menu"><i class="fi-pencil"></i></div>
          <div class="small-6 columns removeWidget" title="Remove menu"><i class="fi-trash"></i></div>
        </div>
        <div class="icon-bar five-up" role="navigation" data-topbar>
          <a class="item" href="#home" data-scroll data-scroll-offset="-90" data-scroll-easing="easeOutExpo">
            <i class="fi-home"></i>
            <label>Home</label>
          </a>
          <a class="item" href="#videos" data-scroll data-scroll-offset="-68" data-scroll-easing="easeOutExpo">
            <i class="fi-video"></i>
            <label>Videos</label>
          </a>
          <a class="item" href="#photos" data-scroll data-scroll-offset="-68" data-scroll-easing="easeOutExpo">
            <i class="fi-photo"></i>
            <label>Pics</label>
          </a>
          <a class="item" href="#contact" data-scroll data-scroll-offset="-68" data-scroll-easing="easeOutExpo">
            <i class="fi-mail"></i>
            <label>Contact</label>
          </a>
          <a class="item" href="#share" data-scroll data-scroll-offset="-68" data-scroll-easing="easeOutExpo">
            <i class="fi-share"></i>
            <label>Share</label>
          </a>
        </div>
      </div>
EOT;
      return $html;
    }
    
    /**
     * Returns the Edit view HTML of this widget.
     */
    public function getEditHtml($id, array $fields = array()) {
      $dbFields = $this->foundationWidgets->getWidgetContentFromDb($id);
      $html = $this->decorateEditHtml($id, $fields, $dbFields, '');
      return $html;
    }

    /**
     * Constructor
     */
    public function __construct(FoundationWidgets $foundationWidgets, \Heredoc $heredoc)
    {
      $this->foundationWidgets = $foundationWidgets;
      $this->heredoc = $heredoc;
    }
  }
