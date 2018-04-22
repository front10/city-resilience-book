import React from 'react';
import addons from '@storybook/addons';
import "semantic-ui/dist/semantic.min.css";
import { Button } from 'semantic-ui-react';

const styles = {
  width: '100%'
};

class Notes extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { theme: 'miamidade' };
    this.changeTheme = this.changeTheme.bind(this);
  }  

  changeTheme = ($event, data) => {
    let iframe = document.getElementById("storybook-preview-iframe");
    if (iframe) {
      let _document = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
      let link = _document.getElementById("story-book-themes");
      if (link) {
        let root = _document.getElementById("root");
        if (root)
          root.style.display = "none";
        link.setAttribute("href", `/themes/${data.content.toLowerCase()}/semantic.css`);
        let loaderTheme = _document.getElementById("story-book-loader-theme");
        if (!loaderTheme) {
          loaderTheme = _document.createElement('div');
          loaderTheme.setAttribute('class', 'ui active inverted dimmer');
          loaderTheme.setAttribute('id', 'story-book-loader-theme');
          loaderTheme.innerHTML = `<div class="ui text loader">Changing theme</div>`;
          _document.body.appendChild(loaderTheme);
        }
        loaderTheme.style.height = '90%';
        loaderTheme.style.display = 'block';
        setTimeout(() => {
          if (root)
            root.style.display = 'block';
          loaderTheme.style.display = 'none';
        }, 1000);
        this.setState({ theme: data.content.toLowerCase() });
      }
    }
  }

  render() {
    return (
      <div style={styles}>
        <Button.Group vertical labeled icon fluid>
          <Button basic content='Default' active={this.state.theme === 'default'} onClick={this.changeTheme} />
          <Button basic content='MiamiDade' active={this.state.theme === 'miamidade'} onClick={this.changeTheme} />
          <Button basic content='Broward' active={this.state.theme === 'broward'} onClick={this.changeTheme} />
          <Button basic content='Amazon' active={this.state.theme === 'amazon'} onClick={this.changeTheme} />
        </Button.Group>  
      </div>
    );
  }
}

// Register the addon with a unique name.
addons.register('theme/switcher', (api) => {
  const notesLocal = <Notes channel={addons.getChannel()} api={api} />;
  // Also need to set a unique name to the panel.
  const NotesLocal = <Notes channel={addons.getChannel()} api={api} />;
  addons.addPanel('theme/switcher/panel', {
    title: 'Themes',
    render: () => (
      notesLocal
    ),
  });
});
