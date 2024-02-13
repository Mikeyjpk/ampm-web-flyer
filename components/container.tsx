'use client'

interface ContainerProps {
    children: React.ReactNode
  };

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="
            max-w-2xl
            min-w-sm
            mx-auto
            flex
            flex-col
            gap-y-4
        ">
            {children}
        </div>
    )
}

export default Container; 