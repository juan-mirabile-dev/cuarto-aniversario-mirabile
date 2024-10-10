import choirMembers from '../../data/choirMembers.js';
import camerataMembers from '../../data/camerataMembers.js';

const Members = () => {
    return (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
            <div className='mb-2 bg-inst-card rounded-md p-4'>
                <p className="font-bold text-md">Integrantes del coro</p>
                <ul>
                    {Object.entries(choirMembers).map(([voicePart, members]) => (
                        <div className="mt-2" key={voicePart}>
                            <p className="font-bold text-sm">{voicePart.charAt(0).toUpperCase() + voicePart.slice(1)}</p>
                            <ul>
                                {members.map((member, index) => (
                                    <li className="text-xs" key={index}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='mb-2 bg-inst-card rounded-md p-4'>
                <p className="font-bold text-md">Integrantes de la camerata</p>
                <ul>
                    {Object.entries(camerataMembers).map(([instrumentPart, members]) => (
                        <div className="mt-2" key={instrumentPart}>
                            <p className="font-bold text-sm">{instrumentPart.charAt(0).toUpperCase() + instrumentPart.slice(1)}</p>
                            <ul>
                                {members.map((member, index) => (
                                    <li className="text-xs" key={index}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Members;
