import { Link, useSearchParams } from 'react-router-dom';

const TagInner = ({ link = false, title, color }) => {
    const initCn = 'relative inline-flex items-center bg-opacity-10 text-xs -mt-0.5 py-1 px-4 rounded-full';
    const linkCn = link ? 'no-underline hover:underline' : '';

    return (
        <span
            className={`${initCn} ${linkCn}`}
            style={{ color: color }}
        >
            <div
                className="absolute inset-0 opacity-10 w-full h-full rounded-full"
                style={{ backgroundColor: color }}
            />
            <span className="relative z-10">
                {title}
            </span>
        </span>
    );
};

const Tag = ({ link = false, id, ...props }) => {
    const [searchParams] = useSearchParams();

    // Params to to object
    let params = {
        ...Object.fromEntries(searchParams),
        tagId: id,
    };

    // Params to string
    params = new URLSearchParams(params).toString();

    return link ? (
        <Link to={{
            pathname: '/events',
            search: params,
        }}>
            <TagInner link {...props} />
        </Link>
    ) : (
        <TagInner {...props} />
    );
}

export default Tag;