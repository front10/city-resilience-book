import React from 'react';
import addons from '@storybook/addons';

export class ThemeSelector extends React.Component {
    render() {
        const {
            children
        } = this.props;
        const channel = addons.getChannel();

        channel.emit('theme/switch');
        return children;
    }

    componentDidMount() {
        this.init();
    }

    init() {
        if (!document.getElementById("story-book-themes")) {
            let root = document.getElementById("root");
            if (root)
                root.style.display = "none";
            let link = document.createElement("link");
            link.setAttribute("type", "text/css");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/themes/default/semantic.css");
            link.setAttribute("id", "story-book-themes");
            link.onload = function () {
                root.style.display = "block";
            };
            document.head.appendChild(link);
        }
    }
}