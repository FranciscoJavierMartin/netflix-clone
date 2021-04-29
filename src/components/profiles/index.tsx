import React, { ImgHTMLAttributes } from 'react';
import {Container, Title, List, Item, Picture, Name} from './styles/profiles';

interface ProfilesProps {
  children: React.ReactNode;
}

export default function Profiles({ children, ...restProps }: ProfilesProps) {
  return <Container {...restProps}>{children}</Container>;
}

interface ProfilesSubComponentProps {
  children: React.ReactNode;
}
interface ProfilesTitleProps extends ProfilesSubComponentProps {}
interface ProfilesListProps extends ProfilesSubComponentProps {}
interface ProfilesUserProps extends ProfilesSubComponentProps {}
interface ProfilesPictureProps extends ImgHTMLAttributes<any> {}
interface ProfilesNameProps extends ProfilesSubComponentProps {}

Profiles.Title = function ProfilesTitle({
  children,
  ...restProps
}: ProfilesTitleProps) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({
  children,
  ...restProps
}: ProfilesListProps) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({
  children,
  ...restProps
}: ProfilesUserProps) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({
  src,
  ...restProps
}: ProfilesPictureProps) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({
  children,
  ...restProps
}: ProfilesNameProps) {
  return <Name {...restProps}>{children}</Name>;
};
