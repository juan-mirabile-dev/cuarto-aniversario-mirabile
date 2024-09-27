import choirMembers from '../../data/choirMembers.js';
import camerataMembers from '../../data/camerataMembers.js';

const Members = () => {
    return (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
            <div className='mb-2'>
                <p className="font-bold text-lg">Integrantes del coro</p>
                <ul>
                    {Object.entries(choirMembers).map(([voicePart, members]) => (
                        <div className="mt-2" key={voicePart}>
                            <p className="font-bold">{voicePart.charAt(0).toUpperCase() + voicePart.slice(1)}</p>
                            <ul>
                                {members.map((member, index) => (
                                    <li key={index}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='mb-2'>
                <p className="font-bold text-lg">Integrantes de la camerata</p>
                <ul>
                    {Object.entries(camerataMembers).map(([instrumentPart, members]) => (
                        <div className="mt-2" key={instrumentPart}>
                            <p className="font-bold">{instrumentPart.charAt(0).toUpperCase() + instrumentPart.slice(1)}</p>
                            <ul>
                                {members.map((member, index) => (
                                    <li key={index}>{member}</li>
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
