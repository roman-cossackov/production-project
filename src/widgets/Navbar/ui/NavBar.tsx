import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./NavBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
	className?: string;
}

export const Navbar = (props: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar)}>
			<div className={cls.links}>
				<AppLink
					to={"/"}
					className={cls.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					Главная
				</AppLink>
				<AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
