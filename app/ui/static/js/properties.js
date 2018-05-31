App.properties = App.properties || {
    keyValues: {
        'boot.autostart': {
            disabled: true,
            description: 'Always start the container when LXD starts (if not set, restore last state)',
            type: 'boolean'
        },
        'boot.autostart.delay': {
            disabled: true,
            description: 'Number of seconds to wait after the container started before starting the next one',
            type: 'integer'
        },
        'boot.autostart.priority': {
            disabled: true,
            description: 'What order to start the containers in (starting with highest)',
            type: 'integer'
        },
        'boot.host_shutdown_timeout': {
            disabled: true,
            description: 'Seconds to wait for container to shutdown before it is force stopped',
            type: 'integer'
        },
        'boot.stop.priority': {
            disabled: true,
            description: 'What order to shutdown the containers (starting with highest)',
            type: 'integer'
        },
        'environment.*': {
            disabled: true,
            description: 'key/value environment variables to export to the container and set on exec',
            type: 'string'
        },
        'limits.cpu': {
            disabled: true,
            description: 'Number or range of CPUs to expose to the container',
            type: 'string'
        },
        'limits.cpu.allowance': {
            disabled: true,
            description: 'How much of the CPU can be used. Can be a percentage (e.g. 50%) for a soft limit or hard a chunk of time (25ms/100ms)',
            type: 'string'
        },
        'limits.cpu.priority': {
            disabled: true,
            description: 'CPU scheduling priority compared to other containers sharing the same CPUs (overcommit) (integer between 0 and 10)',
            type: 'integer'
        },
        'limits.disk.priority': {
            disabled: true,
            description: 'When under load, how much priority to give to the container\'s I/O requests (integer between 0 and 10)',
            type: 'integer'
        },
        'limits.kernel.*': {
            disabled: true,
            description: 'This limits kernel resources per container (e.g. number of open files)',
            type: 'string'
        },
        'limits.memory': {
            disabled: true,
            description: 'Percentage of the host\'s memory or fixed value in bytes (supports kB, MB, GB, TB, PB and EB suffixes)',
            type: 'string'
        },
        'limits.memory.enforce': {
            disabled: true,
            description: 'If hard, container can\'t exceed its memory limit. If soft, the container can exceed its memory limit when extra host memory is available.',
            type: 'string'
        },
        'limits.memory.swap': {
            disabled: true,
            description: 'Whether to allow some of the container\'s memory to be swapped out to disk',
            type: 'boolean'
        },
        'limits.memory.swap.priority': {
            disabled: true,
            description: 'The higher this is set, the least likely the container is to be swapped to disk (integer between 0 and 10)',
            type: 'integer'
        },
        'limits.network.priority': {
            disabled: true,
            description: 'When under load, how much priority to give to the container\'s network requests (integer between 0 and 10)',
            type: 'integer'
        },
        'limits.processes': {
            disabled: true,
            description: 'Maximum number of processes that can run in the container',
            type: 'integer'
        },
        'linux.kernel_modules': {
            disabled: true,
            description: 'Comma separated list of kernel modules to load before starting the container',
            type: 'string'
        },
        'migration.incremental.memory': {
            disabled: true,
            description: 'Incremental memory transfer of the container\'s memory to reduce downtime.',
            type: 'boolean'
        },
        'migration.incremental.memory.goal': {
            disabled: true,
            description: 'Percentage of memory to have in sync before stopping the container.',
            type: 'integer'
        },
        'migration.incremental.memory.iterations': {
            disabled: true,
            description: 'Maximum number of transfer operations to go through before stopping the container.',
            type: 'integer'
        },
        'nvidia.runtime': {
            disabled: true,
            description: 'Pass the host NVIDIA and CUDA runtime libraries into the container',
            type: 'boolean'
        },
        'raw.apparmor': {
            disabled: true,
            description: 'Apparmor profile entries to be appended to the generated profile',
            type: 'blob'
        },
        'raw.idmap': {
            disabled: true,
            description: 'Raw idmap configuration (e.g. "both 1000 1000")',
            type: 'blob'
        },
        'raw.lxc': {
            disabled: true,
            description: 'Raw LXC configuration to be appended to the generated one',
            type: 'blob'
        },
        'raw.seccomp': {
            disabled: true,
            description: 'Raw Seccomp configuration',
            type: 'blob'
        },
        'security.devlxd': {
            disabled: true,
            description: 'Controls the presence of /dev/lxd in the container',
            type: 'boolean'
        },
        'security.devlxd.images': {
            disabled: true,
            description: 'Controls the availability of the /1.0/images API over devlxd',
            type: 'boolean'
        },
        'security.idmap.base': {
            disabled: true,
            description: 'The base host ID to use for the allocation (overrides auto-detection)',
            type: 'integer'
        },
        'security.idmap.isolated': {
            disabled: true,
            description: 'Use an idmap for this container that is unique among containers with isolated set.',
            type: 'boolean'
        },
        'security.idmap.size': {
            disabled: true,
            description: 'The size of the idmap to use',
            type: 'integer'
        },
        'security.nesting': {
            disabled: true,
            description: 'Support running lxd (nested) inside the container',
            type: 'boolean'
        },
        'security.privileged': {
            disabled: true,
            description: 'Runs the container in privileged mode',
            type: 'boolean'
        },
        'security.syscalls.blacklist': {
            disabled: true,
            description: 'A \'\n\' separated list of syscalls to blacklist',
            type: 'string'
        },
        'security.syscalls.blacklist_compat': {
            disabled: true,
            description: 'On x86_64 this enables blocking of compat_* syscalls, it is a no-op on other arches',
            type: 'boolean'
        },
        'security.syscalls.blacklist_default': {
            disabled: true,
            description: 'Enables the default syscall blacklist',
            type: 'boolean'
        },
        'security.syscalls.whitelist': {
            disabled: true,
            description: 'A \'\n\' separated list of syscalls to whitelist (mutually exclusive with security.syscalls.blacklist*)',
            type: 'string'
        },
    },
    left: [
        "admiring",
        "adoring",
        "affectionate",
        "agitated",
        "amazing",
        "angry",
        "awesome",
        "blissful",
        "boring",
        "brave",
        "clever",
        "cocky",
        "compassionate",
        "competent",
        "condescending",
        "confident",
        "cranky",
        "dazzling",
        "determined",
        "distracted",
        "dreamy",
        "eager",
        "ecstatic",
        "elastic",
        "elated",
        "elegant",
        "eloquent",
        "epic",
        "fervent",
        "festive",
        "flamboyant",
        "focused",
        "friendly",
        "frosty",
        "gallant",
        "gifted",
        "goofy",
        "gracious",
        "happy",
        "hardcore",
        "heuristic",
        "hopeful",
        "hungry",
        "infallible",
        "inspiring",
        "jolly",
        "jovial",
        "keen",
        "kind",
        "laughing",
        "loving",
        "lucid",
        "mystifying",
        "modest",
        "musing",
        "naughty",
        "nervous",
        "nifty",
        "nostalgic",
        "objective",
        "optimistic",
        "peaceful",
        "pedantic",
        "pensive",
        "practical",
        "priceless",
        "quirky",
        "quizzical",
        "relaxed",
        "reverent",
        "romantic",
        "sad",
        "serene",
        "sharp",
        "silly",
        "sleepy",
        "stoic",
        "stupefied",
        "suspicious",
        "tender",
        "thirsty",
        "trusting",
        "unruffled",
        "upbeat",
        "vibrant",
        "vigilant",
        "vigorous",
        "wizardly",
        "wonderful",
        "xenodochial",
        "youthful",
        "zealous",
        "zen"
    ],
    right: [
        "allen",
        "albattani",
        "almeida",
        "agnesi",
        "archimedes",
        "ardinghelli",
        "aryabhata",
        "austin",
        "babbage",
        "banach",
        "bardeen",
        "bartik",
        "bassi",
        "beaver",
        "bell",
        "benz",
        "bhabha",
        "bhaskara",
        "blackwell",
        "bohr",
        "booth",
        "borg",
        "bose",
        "boyd",
        "brahmagupta",
        "brattain",
        "brown",
        "carson",
        "chandrasekhar",
        "shannon",
        "clarke",
        "colden",
        "cori",
        "cray",
        "curran",
        "curie",
        "darwin",
        "davinci",
        "dijkstra",
        "dubinsky",
        "easley",
        "edison",
        "einstein",
        "elion",
        "engelbart",
        "euclid",
        "euler",
        "fermat",
        "fermi",
        "feynman",
        "franklin",
        "galileo",
        "gates",
        "goldberg",
        "goldstine",
        "goldwasser",
        "golick",
        "goodall",
        "haibt",
        "hamilton",
        "hawking",
        "heisenberg",
        "hermann",
        "heyrovsky",
        "hodgkin",
        "hoover",
        "hopper",
        "hugle",
        "hypatia",
        "jackson",
        "jang",
        "jennings",
        "jepsen",
        "johnson",
        "joliot",
        "jones",
        "kalam",
        "kare",
        "keller",
        "kepler",
        "khorana",
        "kilby",
        "kirch",
        "knuth",
        "kowalevski",
        "lalande",
        "lamarr",
        "lamport",
        "leakey",
        "leavitt",
        "lewin",
        "lichterman",
        "liskov",
        "lovelace",
        "lumiere",
        "mahavira",
        "mayer",
        "mccarthy",
        "mcclintock",
        "mclean",
        "mcnulty",
        "meitner",
        "meninsky",
        "mestorf",
        "minsky",
        "mirzakhani",
        "morse",
        "murdock",
        "neumann",
        "newton",
        "nightingale",
        "nobel",
        "noether",
        "northcutt",
        "noyce",
        "panini",
        "pare",
        "pasteur",
        "payne",
        "perlman",
        "pike",
        "poincare",
        "poitras",
        "ptolemy",
        "raman",
        "ramanujan",
        "ride",
        "montalcini",
        "ritchie",
        "roentgen",
        "rosalind",
        "saha",
        "sammet",
        "shaw",
        "shirley",
        "shockley",
        "sinoussi",
        "snyder",
        "spence",
        "stallman",
        "stonebraker",
        "swanson",
        "swartz",
        "swirles",
        "tesla",
        "thompson",
        "torvalds",
        "turing",
        "varahamihira",
        "visvesvaraya",
        "volhard",
        "wescoff",
        "wiles",
        "williams",
        "wilson",
        "wing",
        "wozniak",
        "wright",
        "yalow",
        "yonath"
    ]

}