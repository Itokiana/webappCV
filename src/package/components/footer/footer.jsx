import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Tooltip } from '@welovedevs/ui';
import { useMediaQuery } from '@material-ui/core';

import { ShareLinks } from './share_links/share_links';

import { ReactComponent as Logo } from '../../assets/icons/brands/welovedevs.svg';
import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const FooterComponent = () => {
    const classes = useStyles();
    const { screenSizes } = useTheme();

    const useSmallLayout = useMediaQuery(
        `(max-width: ${screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2}px)`,
        { defaultMatches: true }
    );

    if (useSmallLayout) {
        return (
            <div className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
                <div className={classes.wldLogoGithubLogoContainer}>
                    <a
                        className={classes.logoLink}
                        href="https://welovedevs.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Logo className={classes.logo} />
                    </a>
                    <Tooltip
                        title={
                            <FormattedMessage
                                id="Footer.github.tooltip"
                                defaultMessage="Create your own developer profile!"
                            />
                        }
                    >
                        <a
                            className={classes.githubLink}
                            href="https://github.com/welovedevs/developer-profile"
                            target="_bank"
                            rel="noreferer noopener"
                        >
                            <GithubLogo className={classes.githubLogo} />
                        </a>
                    </Tooltip>
                </div>
                <ShareLinks useSmallLayout />
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <a className={classes.logoLink} href="https://www.facebook.com/HelloSayna/" target="_blank" rel="noreferrer noopener">
                <img src="https://scontent.ftnr2-1.fna.fbcdn.net/v/t1.0-0/p320x320/88081240_547335772555216_2502436637447815168_n.png?_nc_cat=111&_nc_sid=85a577&efg=eyJpIjoiYiJ9&_nc_eui2=AeFrXbwWLHzPBn0KfqvyAJ3Mo4GoJjoM8m2jgagmOgzybZgKb-HOYcplNAmOnVUR6J0ygGEDZItDHYLXaWPPMGfg&_nc_ohc=RS-4UA4b5bEAX8Ku8CZ&_nc_ht=scontent.ftnr2-1.fna&oh=82dae4f681903e33ceddf401d13f4449&oe=5EBCB40E" alt="sayna" width="60" height="60" />
            </a>
            <ShareLinks />
        </div>
    );
};

export const Footer = memo(FooterComponent);
