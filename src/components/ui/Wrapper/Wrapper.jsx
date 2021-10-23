import WrapperRoot from '@/components/ui/Wrapper/WrapperRoot';

function Wrapper(props) {
  const {
    className: mix,
    children,
  } = props;

  return (
    <WrapperRoot
      data-semantics={Wrapper.name}
      className={mix}
    >
      {children}
    </WrapperRoot>
  );
}

export default Wrapper;
